export const LAUNCH_MODAL = "LAUNCH_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const launchModal = (modal) => {
    return ({
        type: LAUNCH_MODAL,
        modal
    })
}

export const closeModal = () => ({
    type: CLOSE_MODAL
})