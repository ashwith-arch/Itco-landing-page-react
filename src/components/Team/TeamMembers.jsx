import { Link } from 'react-router-dom';

function TeamMembers() {
  return (
    <>
      {/* ============================== TEAM MEMBERS GRID ============================== */}
      <section className="team-intro-sec sec-ptb" style={{backgroundColor: '#eefaf7', paddingTop: 0}}>
        <div className="container">
          <div className="row gy-4">
            <div className="col-md-6 col-lg-4">
              <div className="single-team text-center">
                <div className="member-img"><img src="/images/emp1.png" alt="team" width="300" height="300" style={{width: '100%', height: '380px', objectFit: 'cover'}}/></div>
                <ul className="team-social list-unstyled"><li><a href="#"><i className="fab fa-facebook-f"></i></a></li><li><a href="#"><i className="fab fa-twitter"></i></a></li><li><a href="#"><i className="fab fa-linkedin-in"></i></a></li></ul>
                <div className="member-info"><h4 className="member-name"><a href="#">Edoardo Romussi</a></h4><span className="member-cat text-muted">Ui/Ux Designer</span></div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="single-team text-center">
                <div className="member-img"><img src="/images/emp2.png" alt="team" width="300" height="300" style={{width: '100%', height: '380px', objectFit: 'cover'}}/></div>
                <ul className="team-social list-unstyled"><li><a href="#"><i className="fab fa-facebook-f"></i></a></li><li><a href="#"><i className="fab fa-twitter"></i></a></li><li><a href="#"><i className="fab fa-linkedin-in"></i></a></li></ul>
                <div className="member-info"><h4 className="member-name"><a href="#">Jessica James</a></h4><span className="member-cat text-muted">Marketing Coordinator</span></div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="single-team text-center">
                <div className="member-img"><img src="/images/emp3.png" alt="team" width="300" height="300" style={{width: '100%', height: '380px', objectFit: 'cover'}}/></div>
                <ul className="team-social list-unstyled"><li><a href="#"><i className="fab fa-facebook-f"></i></a></li><li><a href="#"><i className="fab fa-twitter"></i></a></li><li><a href="#"><i className="fab fa-linkedin-in"></i></a></li></ul>
                <div className="member-info"><h4 className="member-name"><a href="#">Adrian Williams</a></h4><span className="member-cat text-muted">Web Designer</span></div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="single-team text-center">
                <div className="member-img"><img src="/images/emp4.png" alt="team" width="300" height="300" style={{width: '100%', height: '380px', objectFit: 'cover'}}/></div>
                <ul className="team-social list-unstyled"><li><a href="#"><i className="fab fa-facebook-f"></i></a></li><li><a href="#"><i className="fab fa-twitter"></i></a></li><li><a href="#"><i className="fab fa-linkedin-in"></i></a></li></ul>
                <div className="member-info"><h4 className="member-name"><a href="#">Laci Pletcher</a></h4><span className="member-cat text-muted">Process Analyst</span></div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="single-team text-center">
                <div className="member-img"><img src="/images/emp5.png" alt="team" width="300" height="300" style={{width: '100%', height: '380px', objectFit: 'cover'}}/></div>
                <ul className="team-social list-unstyled"><li><a href="#"><i className="fab fa-facebook-f"></i></a></li><li><a href="#"><i className="fab fa-twitter"></i></a></li><li><a href="#"><i className="fab fa-linkedin-in"></i></a></li></ul>
                <div className="member-info"><h4 className="member-name"><a href="#">Alex Brown</a></h4><span className="member-cat text-muted">Co-Founder</span></div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="single-team text-center">
                <div className="member-img"><img src="/images/emp6.png" alt="team" width="300" height="300" style={{width: '100%', height: '380px', objectFit: 'cover'}}/></div>
                <ul className="team-social list-unstyled"><li><a href="#"><i className="fab fa-facebook-f"></i></a></li><li><a href="#"><i className="fab fa-twitter"></i></a></li><li><a href="#"><i className="fab fa-linkedin-in"></i></a></li></ul>
                <div className="member-info"><h4 className="member-name"><a href="#">Rebecca Davis</a></h4><span className="member-cat text-muted">Web Developer</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================== JOIN CTA ============================== */}
      <section className="join-cta sec-ptb bg-green">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h2 className="sec-title text-white mb-2">Want to Join Our Team?</h2>
              <p style={{color: 'rgba(255,255,255,.75)', margin: 0}}>We are always looking for talented individuals to join our growing team. Send us your resume today.</p>
            </div>
            <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
              <Link className="thm-btn" to="/contact"><span className="txt">Apply Now</span></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TeamMembers;
