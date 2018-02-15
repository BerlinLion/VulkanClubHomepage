    const doc = document;
    let class_colorDisplay = doc.getElementsByClassName("color-display")
    const colorPicker = doc.getElementById("color-picker")
    let target;
    let colorValue;
    // buttons
    let btn_enterRgb = doc.getElementsByClassName('enter-rgb-btn')
    let btn_pickRgb = doc.getElementsByClassName('pick-rgb-btn')

    function sendRGB_toMC() {
        // convert to MC format
    }
        /**
         * [convert value to MC ]
         * @return {[type]} [description]
         */
        function convertRGB_toMC() {

        }

    /**
     * [set color from target]
     */
    function setColor(ev) {
        // check if ev.target is valid
        if(!ev.target.classList.contains("color-display")) {
            return;
        }
        colorValue = ev.target.style['background-color']
        console.log(`colorValue is ${colorValue}`);
    }

    /**
     * [get color from target]
     */
    function getColor(ev) {
        return colorValue;
    }


    // listen to clicked and be able to change color
    doc.body.addEventListener("click", function(ev) {
        fnc_pickRGB(ev)
        setColor(ev)
    })

    /**
     * [Change background color of target in realtime]
     * @param  {[type]} ev [description]
     * @return {[type]}    [description]
     */
    colorPicker.addEventListener("change", function(ev) {
        target.parentNode.style["background-color"] = `${ev.target.value}`
    })
                                                /** #150205
                                                 * [Button for enterting RGB]
                                                 * @return {[type]} [description]
                                                 */
                                                // doc.getElementById('enter-rgb').addEventListener("click", function() {
                                                //     let entered_rgb = prompt("Enter RGB value: red green blue")
                                                //     console.log(entered_rgb);
                                                // })
                                                function fnc_enterRGB(ev) {
                                                    let entered_rgb = prompt("Enter RGB value: red green blue")
                                                    console.log(entered_rgb);
                                                }
    /**
     * [Button for picking RGB]
     * @return {[type]} [description]
     */
    function fnc_pickRGB(ev) {
        if(!ev.target.classList.contains("pick-rgb-btn")) {
            return;
        }
        // set target to parent of current button
        target = ev.target
        // if(!ev.target.classList.contains("color-display")) {
        //     return;
        // }
        colorPicker.focus();
        colorPicker.value = "#FFCC00";
        colorPicker.click();
    }
