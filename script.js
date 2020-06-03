let counter = 0;
let dom = document.querySelector('#root');
let da_kono = "だーこの";
doCount();
function doCount() {
    if (counter % 2 === 0) {
        da_kono = "だーこの";
    }
    else {
        da_kono = "だーこのじゃない";
    }
    let element = React.createElement('p', {}, "count: " + counter + " " + da_kono);
    ReactDOM.render(element, dom);
    counter++;
}
;

let dom2 = document.querySelector('#riit');
let element2 = React.createElement(
    'div', {}, [
        React.createElement(
            'h2', {}, "Hello!"
        ),
        React.createElement(
            'h3', {}, "React sample page."
        ),
        React.createElement(
            'ul', {}, [
                React.createElement(
                    'li', {}, "First item."
                ),
                React.createElement(
                    'li', {}, "Second item."
                ),
                React.createElement(
                    'li', {}, "Third item."
                ),
            ]
        )
    ]
)
ReactDOM.render(element2, dom2)
