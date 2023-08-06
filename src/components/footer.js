import"./FooterStyles.css"
import logo from "../images/White.png"

const Footer =()=>{
    return (
        <footer class="site-footer">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-6">
            <img src={logo} alt="Logo" className="navbar-logo" />
              <p class="text-justify">InternNexus is a rising platform for connecting students and companies by providing internships to students As well as consulting to the startups or companies for the technology advancements with technical support in the form of resource deployment or remote work.</p>
            </div>
  
            <div class="col-xs-6 col-md-3">
              <h6>Terms of Use</h6>
              <ul class="footer-links">
                <li><a href="http://scanfcode.com/category/c-language/">Privacy Policy</a></li>
                <li><a href="http://scanfcode.com/category/front-end-development/">Terms & Conditions</a></li>
            
              </ul>
            </div>
  
            <div class="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul class="footer-links">
                <li><a href="http://scanfcode.com/about/">Webinar</a></li>
                <li><a href="http://scanfcode.com/contact/">Blogs</a></li>
                <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Resources</a></li>
                <li><a href="http://scanfcode.com/privacy-policy/">Events</a></li>
               
              </ul>
            </div>
          </div>
          <hr/>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-sm-6 col-xs-12">
              <p class="copyright-text">© 2023 TechIntelliverse Private Limited. All rights reserved.
              </p>
            </div>
  
            <div class="col-md-4 col-sm-6 col-xs-12">
              <ul class="social-icons">
                <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
                <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
                <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
                <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>   
              </ul>
            </div>
          </div>
        </div>
  </footer>
    )
}
export default Footer;