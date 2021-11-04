/**
 * Animates divs with class "animated-h2-div" when they appear on screen.
 * @author Ralf Gunter Rotstein <ralf.rotstein@gmail.com>
 * @copyright Copyright (c) 2021, Ralf Gunter Rotstein
 * @license https://www.gnu.org/licenses/gpl-3.0.html GNU General Public License
 * 
 * @category AnimatedH2Divs
 * @package AnimatedH2Divs
 * @version 1.0.0
 */
class AnimatedH2Divs {
    /**
     * Sets instance ready to use.
	 * @constructor
     */
    constructor() {
        /**
         * @property {jQuery} $animatedH2Divs All elements with the class "animated-h2-div".
         */
        this.$animatedH2Divs = $(".animated-h2-div");
        
        $(window).on("scroll", this.onScrollWindow.bind(this));
    }
    
    /**
     * Animates animatedDivs when they appear on screen or disappear.
	 * @returns {void}
     */
    onScrollWindow() {
        this.$animatedH2Divs.each((index, animatedDiv) => {
            const $animatedDivObject = $(animatedDiv);

            if (this.objectIsOverScreenAnimationPoint($animatedDivObject))
                this.animateDiv($animatedDivObject);
            else
                this.revertObjectAnimation($animatedDivObject);
        });
    }

    /**
     * False means the object is under the animation point.
     * @param {jQuery} $animatedDivObject Object with a single div.
     * @returns {boolean}
     */
    objectIsOverScreenAnimationPoint($animatedDivObject) {
        const screenAnimationPoint = this.screenAnimationPoint();

        const screenCurrentTop = $(window).scrollTop();
        const pageAnimationPoint = screenCurrentTop + screenAnimationPoint;

        const objectTop = $animatedDivObject.offset().top;
        return objectTop < pageAnimationPoint;
    }

    /**
     * Height of screen in pixels where the animations will happen.
     * @returns {number}
     */
    screenAnimationPoint() { return $(window).height() * 1/2; }
    
    /**
     * Adds to div the class that makes it animate.
     * @param {jQuery} $animatedDivObject Object with a single div.
     * @returns {void}
     */
    animateDiv($animatedDivObject) { $animatedDivObject.addClass("already-animated"); }

    /**
     * Removes from div the class that made it animate.
     * @param {jQuery} $animatedDivObject Object with a single div.
     * @returns {void}
     */
    revertObjectAnimation($animatedDivObject) { $animatedDivObject.removeClass("already-animated"); }
}

$(document).ready(function() {
    const animatedH2Div = new AnimatedH2Divs();
});