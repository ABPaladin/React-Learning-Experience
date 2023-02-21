export default function Rugaciune() {
    const rugaciuni = ["./video/Doxologia pe glasul 7 (o varianta superba).mp4",
    "./video/MARTURISITI-VA DOMNULUI - Corul Mira (CALITATE MAXIMA AUDIO HD).mp4",
    "./video/Psalmul 33 (Cantare ortodoxa vindecatoare de suflete).mp4",
    "./video/Sa se indrepteze rugaciunea mea (cea mai buna calitate audio).mp4",
    "./video/Sfanta Evanghelie - Cea mai frumoasa interpretare.mp4"]
    const newIndex = Math.floor(Math.random() * rugaciuni.length)
    function ChangeValue(){
      window.location.reload(false);
    }
    return (
        <div>
            <h1>Rugaciune</h1>
        <video width="320" height="240" controls>
        <source src={rugaciuni[newIndex]} type="video/mp4"/>
          Your browser does not support the video tag.
          </video>
          <br></br>
        <button onClick={ChangeValue}>Schimba Rugaciun</button>
        </div>
    )
}