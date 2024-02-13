/** @typedef {object} json
 * @property {object} settings
 * @property {boolean} settings.showInterface
 * @property {object} settings.folders
 * @property {string} settings.folders.game
 * @property {string} settings.folders.skin
 * @property {string} settings.folders.songs
 * @property {object} menu
 * @property {object} menu.mainMenu
 * @property {number} menu.mainMenu.bassDensity
 * @property {number} menu.state
 * @property {number} menu.gameMode
 * @property {number} menu.isChatEnabled
 * @property {object} menu.bm
 * @property {object} menu.bm.time
 * @property {number} menu.bm.time.firstObj
 * @property {number} menu.bm.time.current
 * @property {number} menu.bm.time.full
 * @property {number} menu.bm.time.mp3
 * @property {number} menu.bm.id
 * @property {number} menu.bm.set
 * @property {string} menu.bm.md5
 * @property {number} menu.bm.rankedStatus
 * @property {object} menu.bm.metadata
 * @property {string} menu.bm.metadata.artist
 * @property {string} menu.bm.metadata.artistOriginal
 * @property {string} menu.bm.metadata.title
 * @property {string} menu.bm.metadata.titleOriginal
 * @property {string} menu.bm.metadata.mapper
 * @property {string} menu.bm.metadata.difficulty
 * @property {object} menu.bm.stats
 * @property {number} menu.bm.stats.AR
 * @property {number} menu.bm.stats.CS
 * @property {number} menu.bm.stats.OD
 * @property {number} menu.bm.stats.HP
 * @property {number} menu.bm.stats.SR
 * @property {object} menu.bm.stats.BPM
 * @property {number} menu.bm.stats.BPM.common
 * @property {number} menu.bm.stats.BPM.min
 * @property {number} menu.bm.stats.BPM.max
 * @property {number} menu.bm.stats.circles
 * @property {number} menu.bm.stats.sliders
 * @property {number} menu.bm.stats.spinners
 * @property {number} menu.bm.stats.holds
 * @property {number} menu.bm.stats.maxCombo
 * @property {number} menu.bm.stats.fullSR
 * @property {number} menu.bm.stats.memoryAR
 * @property {number} menu.bm.stats.memoryCS
 * @property {number} menu.bm.stats.memoryOD
 * @property {number} menu.bm.stats.memoryHP
 * @property {object} menu.bm.path
 * @property {string} menu.bm.path.full
 * @property {string} menu.bm.path.folder
 * @property {string} menu.bm.path.file
 * @property {string} menu.bm.path.bg
 * @property {string} menu.bm.path.audio
 * @property {object} menu.mods
 * @property {number} menu.mods.num
 * @property {string} menu.mods.str
 * @property {object} menu.pp
 * @property {number} menu.pp.95
 * @property {number} menu.pp.96
 * @property {number} menu.pp.97
 * @property {number} menu.pp.98
 * @property {number} menu.pp.99
 * @property {number} menu.pp.100
 * @property {number[]} menu.pp.strains
 * @property {object} menu.pp.strainsAll
 * @property {object[]} menu.pp.strainsAll.series
 * @property {string} menu.pp.strainsAll.series.name
 * @property {number[]} menu.pp.strainsAll.series.data
 * @property {number[]} menu.pp.strainsAll.xaxis
 * @property {object} gameplay
 * @property {number} gameplay.gameMode
 * @property {string} gameplay.name
 * @property {number} gameplay.score
 * @property {number} gameplay.accuracy
 * @property {object} gameplay.combo
 * @property {number} gameplay.combo.current
 * @property {number} gameplay.combo.max
 * @property {object} gameplay.hp
 * @property {number} gameplay.hp.normal
 * @property {number} gameplay.hp.smooth
 * @property {object} gameplay.hits
 * @property {number} gameplay.hits.0
 * @property {number} gameplay.hits.50
 * @property {number} gameplay.hits.100
 * @property {number} gameplay.hits.300
 * @property {number} gameplay.hits.geki
 * @property {number} gameplay.hits.katu
 * @property {number} gameplay.hits.sliderBreaks
 * @property {object} gameplay.hits.grade
 * @property {string} gameplay.hits.grade.current
 * @property {string} gameplay.hits.grade.maxThisPlay
 * @property {number} gameplay.hits.unstableRate
 * @property {number[]} gameplay.hits.hitErrorArray
 * @property {object} gameplay.pp
 * @property {number} gameplay.pp.current
 * @property {number} gameplay.pp.fc
 * @property {number} gameplay.pp.maxThisPlay
 * @property {object} gameplay.keyOverlay
 * @property {object} gameplay.keyOverlay.k1
 * @property {boolean} gameplay.keyOverlay.k1.isPressed
 * @property {number} gameplay.keyOverlay.k1.count
 * @property {object} gameplay.keyOverlay.k2
 * @property {boolean} gameplay.keyOverlay.k2.isPressed
 * @property {number} gameplay.keyOverlay.k2.count
 * @property {object} gameplay.keyOverlay.m1
 * @property {boolean} gameplay.keyOverlay.m1.isPressed
 * @property {number} gameplay.keyOverlay.m1.count
 * @property {object} gameplay.keyOverlay.m2
 * @property {boolean} gameplay.keyOverlay.m2.isPressed
 * @property {number} gameplay.keyOverlay.m2.count
 * @property {object} gameplay.leaderboard
 * @property {boolean} gameplay.leaderboard.hasLeaderboard
 * @property {boolean} gameplay.leaderboard.isVisible
 * @property {object} gameplay.leaderboard.ourplayer
 * @property {string} gameplay.leaderboard.ourplayer.name
 * @property {number} gameplay.leaderboard.ourplayer.score
 * @property {number} gameplay.leaderboard.ourplayer.combo
 * @property {number} gameplay.leaderboard.ourplayer.maxCombo
 * @property {string} gameplay.leaderboard.ourplayer.mods
 * @property {number} gameplay.leaderboard.ourplayer.h300
 * @property {number} gameplay.leaderboard.ourplayer.h100
 * @property {number} gameplay.leaderboard.ourplayer.h50
 * @property {number} gameplay.leaderboard.ourplayer.h0
 * @property {number} gameplay.leaderboard.ourplayer.team
 * @property {number} gameplay.leaderboard.ourplayer.position
 * @property {number} gameplay.leaderboard.ourplayer.isPassing
 * @property {} gameplay.leaderboard.slots
 * @property {boolean} gameplay._isReplayUiHidden
 * @property {object} resultsScreen
 * @property {number} resultsScreen.0
 * @property {number} resultsScreen.50
 * @property {number} resultsScreen.100
 * @property {number} resultsScreen.300
 * @property {string} resultsScreen.name
 * @property {number} resultsScreen.score
 * @property {number} resultsScreen.maxCombo
 * @property {object} resultsScreen.mods
 * @property {number} resultsScreen.mods.num
 * @property {string} resultsScreen.mods.str
 * @property {number} resultsScreen.geki
 * @property {number} resultsScreen.katu
 * @property {object} userProfile
 * @property {boolean} userProfile.isConnected
 */