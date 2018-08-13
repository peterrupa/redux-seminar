import { NEXT_SLIDE, PREV_SLIDE } from '../actions/slideActions';

const initialState = {
    currentSlide: 0
};

export default function slideReducer(state = initialState, action) {
    switch(action.type) {
        case NEXT_SLIDE:
            return {
                currentSlide: Math.min(state.currentSlide + 1, 16)
            };
            
        case PREV_SLIDE:
            return {
                currentSlide: Math.max(state.currentSlide - 1, 0)
            };
        
        default:
            return state;
    }
}