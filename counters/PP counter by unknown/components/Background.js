const background = {
  name: 'backgroundContainer',
  template: `
      <div ref="backgroundDiv" :style="boxStyle">
          <slot />
      </div>
    `,
  setup(props, context) {
    const data = Vue.reactive({
      tokens: { backgroundImageLocation: '', md5: '', mapsetid: '' },
      backgroundUrl: '',
      backgroundId: Number.MIN_SAFE_INTEGER,
      rws: {},
    });
    const backgroundDiv = Vue.ref(null);
    const boxStyle = Vue.computed(() => `background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.6)),url(${data.backgroundUrl});`);

    Vue.watch(
      () => data.tokens.backgroundImageLocation,
      () => {
        let currId = (data.backgroundId += 1);

        let width = 1920,
          height = 1080;
        if (backgroundDiv.value) {
          if (backgroundDiv.value.scrollWidth > 10) width = backgroundDiv.value.scrollWidth;
          if (backgroundDiv.value.scrollHeight > 10) height = backgroundDiv.value.scrollHeight;
        }

        preloadImage(
          `${window.overlay.config.getUrl()}/backgroundImage?width=${width}&height=${height}&mapset=${data.tokens.mapsetid}&dummyData=${encodeURIComponent(
            data.tokens.md5
          )}&crop=1`,
          currId,
          (url, id) => {
            if (data.backgroundId !== id) return;
            data.backgroundUrl = url;
          }
        );
      }
    );
    Vue.onMounted(() => {
      console.log(backgroundDiv.value);
    });
    data.rws = watchTokens(['backgroundImageLocation', 'md5', 'mapsetid'], (values) => {
      if (data.tokens['backgroundImageLocation'] != values['backgroundImageLocation']) data.tokens['backgroundImageLocation'] = values['backgroundImageLocation'];
      if (data.tokens['md5'] != values['md5']) data.tokens['md5'] = values['md5'];
      if (data.tokens['mapsetid'] != values['mapsetid']) data.tokens['mapsetid'] = values['mapsetid'];
    });

    return {
      backgroundDiv,
      boxStyle,
    };
  },
};

export default background;
