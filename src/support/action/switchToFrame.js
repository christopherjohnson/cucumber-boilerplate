/**
 * The frame to select
 * @param  {String}  selector The frame to select
 */
export default selector => {
    checkIfElementExists(selector, false, 1);

    const iframe = $(selector);
    browser.switchToFrame(iframe);
};
