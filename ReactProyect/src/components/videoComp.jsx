import videoplayback from ".../videohome.mp4"


function videoComp() {
  return (
    <video loop autoPlay>
        <source src={videoplayback} type="video/mp4" ></source>
    </video>
  )
}

export default videoComp