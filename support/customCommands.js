module.exports = {
    waitBeforeClick: function(el) {
        el.waitForExist();
        el.click();
    }
}
