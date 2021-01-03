import React from 'react';
import Post from './Post';
import '../style.css';

export default function Dashboard(){
    return (
        <div className="container-main">
            <div className="area-middle">
                <h2 className="header">Peter Foris - Personal Blog</h2> 
                <Post id="1" text="This is the first post in the blog. Enjoy.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at mi neque. Aliquam molestie ante vel quam ullamcorper, pretium sollicitudin urna imperdiet. Curabitur rhoncus elementum tincidunt. Nunc pretium, diam ut eleifend luctus, nunc risus maximus ipsum, id blandit felis ante vel magna. Etiam purus ipsum, imperdiet a rhoncus non, convallis at nisl. Pellentesque non leo consequat, viverra lacus non, dictum enim. Cras scelerisque justo id orci mattis, eget hendrerit leo placerat. Suspendisse vitae feugiat orci. Quisque ullamcorper eros sit amet volutpat egestas." />
            </div>
        </div>
    );
}