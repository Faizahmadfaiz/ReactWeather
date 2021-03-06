var React = require('react');
var {Link} = require('react-router');

var Example = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">Example</h1>
            <p>Here are a few example locations to try out:</p>
            <ol>
                <li>
                    <Link to='/?location=Bhadohi'>Bhadohi, UP</Link>
                </li>
                <li>
                    <Link to='/?location=Rio'>Rio, Brazil</Link>
                </li>
            </ol>
        </div>
    );
}

module.exports = Example;