import React from 'react'

const About=()=>{
    return(
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" >
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouayselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://cdn.accentuate.io/11536433196/3759770632236/post-desk-pic-1.jpg?2880x1524" class="d-block w-100 col-md-" alt="..."></img>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://techtalk.vn/wp-content/uploads/2018/12/reactjs-thumb-696x392.jpg" class="d-block w-50 col-md-  " alt="..."></img>
        </div>
         <div className="carousel-item">
           <img src="https://www.lapatria.com/sites/default/files/styles/620x/public/especiales/2016/Marzo/hablar.jpg" class="d-block w-50 col-md-" alt="..."></img>
         </div>
        
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
             <span class="carousel-control-prev-icon" aria-hidden="true"></span>
             <span class="sr-only">Previous</span>
          </a>
           <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
               <span class="carousel-control-next-icon" aria-hidden="true"></span>
               <span class="sr-only">Next</span>
           </a>
    
    
    <div class="accordion" id="accordionExample">
      <div class="card">
        <div class="card-header" id="headingOne">
          <h2 class="mb-0">
            <button class="bt btn-secondary btn-lg btn-block " type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              ABOUT ME 
            </button>
          </h2>
        </div>
        
        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
          <div class="card-body">
          My name is Sara Manuela, I’m an emotional woman who loves life. I believe in God, in my family and friends,
           I love animals, especially cats and dogs. I am happy with the woman I am, and I hope to continue to learn and to be ever braver.I am a girl of fantasies.
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header" id="headingTwo">
          <h2 class="mb-0">
            <button class="btn btn-secondary btn-lg btn-block" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              PROJECTS
            </button>
          </h2>
        </div>
        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
          <br></br>
          <div class="card-body">
          Currently I am a student of phonoaudiology, I have realized few projects, among these you can find some below, realized in html and React.
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header" id="headingThree">
          <h2 class="mb-0">
            <button class="btn btn-secondary btn-lg btn-block" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              SKILLS
            </button>
          </h2>
        </div>
        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
          <div class="card-body">
          On a personal level these stand out in the mastery of my soft skills. At a more Technical level in HTML, CSS and REACT handling.
          </div>
        </div>
      </div>
    </div>
    <div>
       <p className="small font-italic">"...It has the danger of red lips and dusters look at targets with sad anniversary eyes is the terror of rhetoric and the makers of morality is sensitive like an intelligent schizophrenic gonococcus as a black magic treaty Noisy as a candle at two o'clock in the morning mutiny like a frivolous sewer smell like a birthday is a Sibaritan monk who walks without trembling to his eternal damnation on suede shoes." </p>
       <h1 className="small arial">Gonzalo Arango-Los Nadaístas.</h1>
    </div>
    </div>

     
    );
}

export default About;