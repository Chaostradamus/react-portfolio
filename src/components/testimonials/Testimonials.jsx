import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Gardell Dubois",
      title: "Owner of Kool-Aid",
      img: "https://cdn.vox-cdn.com/thumbor/CQoCzxKvJTpgmip96lH3ms9hZ0c=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/10142923/black_panther.jpg",
      icon: "assets/twitter.png",
      desc: "Great worker and even stronger man. Still upset i let him down during intramurals",
    },
    {
      id: 2,
      name: "Mike Tsui",
      title: "MvC2 master",
      img: "https://i.insider.com/5af3598942e1cc64895bd72d?width=600&format=jpeg&auto=webp",
      icon: "assets/youtube.png",
      desc: "He taught me everything I know about games,  also mad i let him down in intramurals",
      featured: true,
    },
    {
      id: 3,
      name: "Lebron James",
      title: "CEO of NBA",
      img: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
      icon: "assets/linkedin.png",
      desc: "Best teammate I ever had, the cameras just werent on",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img className="user" src={d.img} alt="" />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
