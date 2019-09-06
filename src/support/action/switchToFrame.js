/**
 * The frame to select
 * @param  {String}  selector The frame to select
 */
export default selector => {
    const iframe = $(selector);
    browser.switchToFrame(iframe);
};
