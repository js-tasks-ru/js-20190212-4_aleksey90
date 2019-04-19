(function () {

    class Tooltip {

        /**
         * Имя компонента
         * @property {string}
         */
        get name() {
            return 'tooltip';
        }

        /**
         * Обязательный отступ
         */
        get indent() {
            return 5;
        }

        constructor() {
            /**
             * Данное свойство содержит ссылку на
             * елемент содержащий подсказку
             * @type {HTMLDivElement}
             */
            this.el = document.createElement('div');
            this.el.style.position = 'absolute';

            this.el.classList.add(this.name);
            document.body.appendChild(this.el);
        }

        /**
         * Метод подключает включает работу подсказок
         * на элементе
         *
         * @param {Element} root - элемент, внутри которого, нужно включить работу подсказок
         */
        attach(root) {
            document.addEventListener('mouseover', event => {
                // event.preventDefault();
                console.log('123');
                if ( !event.target.hasAttribute('data-tooltip') ) return;
                this.el.nodeValue = event.target.getAttribute('data-tooltip');
                root.appendChild(this.el);
            });
        }

        /**
         * Удаляет все обработчики событий
         */
        detach() {
        }
    }

    window.Tooltip = Tooltip;
})();