import React from 'react';
import { Link } from 'react-router-dom';

const ReadMe = () => {
  return (
    <div className="cards"style={{ paddingTop: '80px' }}>
            <h1>ReactJS</h1>
        <div className="s-page random-restored-page">
        <div className="page-content">
          <h2 className="page-title">Some minimized App</h2>
        </div>
        <div className="close-button s-close-button">x</div>
      </div>
      <div className="s-page custom-page">
        <div className="page-content">
          <h2 className="page-title">Thank You!</h2>
        </div>
        <div className="close-button s-close-button">x</div>
      </div>
      <div className="r-page random-r-page">
        <div className="page-content">
          <h2 className="page-title">App Screen</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae a
            nesciunt hic animi iure laborum vitae maiores blanditiis non voluptate
            similique vel earum cumque nostrum voluptas illo minus alias fugiat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
            aliquid distinctio eum neque provident doloremque nostrum totam
            assumenda repellat repudiandae perferendis facilis voluptatem
            praesentium dignissimos impedit cumque tempore id quaerat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus sint
            officia deleniti omnis asperiores nihil voluptatem maxime labore
            inventore consequatur ipsa nobis officiis laudantium cum provident quo
            tempore temporibus corporis.
          </p>
        </div>
        <div className="close-button r-close-button">x</div>
      </div>
      {/*each tile should specify what page type it opens (to determine which animation) and the corresponding page name it should open*/}
      <div class="dashboard clearfix">
        <ul class="tiles">
          <div class="col1 clearfix">
          <li
              className="tile tile-big tile-1 slideTextUp"
              data-page-type="r-page"
              data-page-name="random-r-page"
            >
              <div>
              <img src="https://inetrnnexusbetas.s3.ap-south-1.amazonaws.com/img_1690225943238_).png" />
            
              </div>
              <div>
              <Link to="/Book"> {/* Use Link to navigate to the "Read Me" page */}
             <h5>React Context API<br></br>
Introduction to React Context API , Creating Context Providers and Consumers , Using Multiple Contex </h5>
            <p>Click to Read</p>

          </Link>
    
    
              </div>
            </li>
           
          
          </div>
    


          <div class="col2 clearfix">
            <li  className="tile tile-big tile-1 slideTextUp"
              data-page-type="r-page"
              data-page-name="random-r-page"
            >
              <div>
              <img src="https://inetrnnexusbetas.s3.ap-south-1.amazonaws.com/img_1690225712469_).png" />
            
              </div>
              <div>
              <a href="#">
              <h5>React Components and Props<br></br>
Understanding React Components and Component Tree , Creating Functional Components</h5>
      <p>Click to Read</p>
      
    </a>
    
    
              </div>
            </li>
            <li  className="tile tile-big tile-1 slideTextUp"
              data-page-type="r-page"
              data-page-name="random-r-page"
            >
              <div>
              <img src="https://inetrnnexusbetas.s3.ap-south-1.amazonaws.com/img_1690226177982_).png" />
            
              </div>
              <div>
                <p></p>
              <a href="#">
              <h5>React Events<br></br>
Event Handling in React , Binding Event Handlers ,Functional Components and Event Handling </h5>
      <p>Click to Read</p>
    
      
    </a>
    
    
              </div>
            </li>
           
           
          </div>
    
          <div class="col3 clearfix">      
           
            <li  className="tile tile-big tile-1 slideTextUp"
              data-page-type="r-page"
              data-page-name="random-r-page"
            >
              <div>
              <img src="https://inetrnnexusbetas.s3.ap-south-1.amazonaws.com/img_1690225770215_).png" />
            
              </div>
              <div>
              <a href="#">
              <h5>State and Lifecycle in React.js<br></br>
Managing State in React Components , Component Lifecycle Methods (Mounting, Updating)</h5>
      <p>Click to Read</p>
      
    </a>
    
    
              </div>
            </li>
          </div>
        </ul>
      </div>
      </div>
  );
};

export default ReadMe;