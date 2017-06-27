import {playMode} from 'common/js/config'

const state = {
	singer: {},
	playing: false,
	fullScreen: false,
	playlist: [],
	sequenceList: [],
	mode: playMode.sequence,
	currentIndex: -1,
	disc: {}
}
export default state