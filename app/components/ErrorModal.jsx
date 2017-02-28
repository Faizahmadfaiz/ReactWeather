var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var ErrorModal = React.createClass({
    getDefaultProps: function() {
        return {
            title: 'Error'
        }
    },
    propTypes: {
        title: React.PropTypes.string,
        message: React.PropTypes.string.isRequired
    },
    componentDidMount: function() {
        var {title, message} = this.props;
        var modalMarkup = (
             <div id="error-modal" className="reveal tiny text-center" data-reveal="">
                <h4>{title}</h4>
                <p>{message}</p>
                <p>
                    <button className="button hollow" data-close="">
                        Okay
                    </button>
                </p>
            </div>
        );

        var $modal = $(ReactDOMServer.renderToString(modalMarkup));
        $(ReactDOM.findDOMNode(this)).html($modal);

        var modal = new Foundation.Reveal($('#error-modal'));
        modal.open();
    },
    render: function() {
        return (
            <div></div>
        );
    }
});

module.exports = ErrorModal;

//<div id="error-modal" class="reveal tiny text-center" data-reveal="w3ayql-reveal" data-reactid=".0.1.0.0.3" role="dialog" aria-hidden="true" data-yeti-box="error-modal" data-resize="error-modal" tabindex="-1" style="display: none; top: 0px;"><h4 data-reactid=".0.1.0.0.3.0">Error</h4><p data-reactid=".0.1.0.0.3.1">city not found</p><p data-reactid=".0.1.0.0.3.2"><button class="button hollow" data-close="" data-reactid=".0.1.0.0.3.2.0">Okay</button></p></div>

//<div id="error-modal" class="reveal tiny text-center" data-reveal="2v5e0y-reveal" data-reactid=".0.1.0.0.3" role="dialog" aria-hidden="false" data-yeti-box="error-modal" data-resize="error-modal" tabindex="-1" style="display: block; top: 0px;"><h4 data-reactid=".0.1.0.0.3.0">Error</h4><p data-reactid=".0.1.0.0.3.1">city not found</p><p data-reactid=".0.1.0.0.3.2"><button class="button hollow" data-close="" data-reactid=".0.1.0.0.3.2.0">Okay</button></p></div>