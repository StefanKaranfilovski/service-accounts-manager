export function reducer(state, action) {

    switch (action.type) {
        
        case 'TOGGLE_SIDEBAR':
            return {
                ...state,
                showSidebar: action.payload
            };

        default:
            return state;
    }
}
