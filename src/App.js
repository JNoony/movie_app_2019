import React from 'react';

const Members = [
  {
    name:"SHOWNU",
    img:"https://w.namu.la/s/a851cbd74aa1d4ea0a600029f66c668df318190b64a46e95d6978fe13b2d03bf45f27defc5f95ccf99b2fc278b32b5812cb1f8b1fec19e82c2092cb7ea7a0e331a33031ef6cc55b1bd9193446b029c8bba6fcd5d4e5ba3fcd22a4a575c6cbba4fdb555571f6f2a38012e01b6aa177cdd",
    position:"리더, 메인댄서, 리드보컬"
  },
  {
    name:"MINHYUK",
    img:"https://w.namu.la/s/59e7d824b141a5cbfea718dad48278afb42394a7aaa9e887e76e6155f5b1618e87e17088dfc67df4526d5ea15ed857ff785e209d865bdd659745cdf4d5075c5e2c183b18343a5468cd3c5ff8ede5e69b9f3ce136e584cd8dc58f0ceae9be23f891e275e79a8cec4dca237d11e4ed5b1b",
    position:"서브보컬"
  },
  {
    name:"KIHYUN",
    img:"https://ww.namu.la/s/1576daaf0829f1e12d5287a9545872eb64cac0c27b7803e8192f8a69ae940af0714ad6b23faf0266cc7c36bc2b9a6438306192e9d48c570f70c02047eba3856b6441602216405603121756e1beef0dc0364a73bdb2b9a249494dffae25d34b04efd0ab080ec82221d94a910a0af55f18",
    position:"메인보컬"
  },
  {
    name:"HYUNGWON",
    img:"https://w.namu.la/s/bfbbe30dd501d307f6cd287558d5d029493d8123b195dc474f436078debfc47b61393356ddcc00e7a299225cdde611ea1d83e24ca4809fe4be8fb36441197166d7d425adc375627b6817dabdd042b2ff7399cf005209f4b4c67aac713f51f31341a6590998f43b524465fa79b3acbef1",
    position:"서브보컬, 리드댄서"
  },
  {
    name:"JOOHONEY",
    img:"https://w.namu.la/s/410404051cda1a7cf0ffb4ef7de56c4377e5b5c0c5338392d60c1c4c31b2d17a2771f54936c15b431555b023023251747b95161d1770b4b48f4d6b97fa55f5d325cfbf8751888c8d16f214d05e82208a9d08917af43c9aa611bd903de16c05b396b33f8791c8203c01f3d2f3fce39d2a",
    position:"메인래퍼"
  },
  {
    name:"I.M",
    img:"https://w.namu.la/s/dd2d7ae1e3a259aff2d05863283be75b76ecea18174f356eb729bd7fed3dd93d3c263a81801473a08417deb2c02430fdba08e00fbe1c0e236caee6c4dc4ee616845bc5aa328ccc472cf06ef87812c02ef768ab42204d9ed71cd82861aa42a5948eca470d9178a55bcef8bfb592b3efa5",
    position:"리드래퍼"
  },
]

function Food({name,img,posi}){
  return (
    <div>
      <h2>{name}</h2>
      <img src={img} alt={name} />
      <p>{posi}</p>
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <h1>Monsta X</h1>
      { Members.map( (con,i)=>
        <Food name={con.name} 
              img={con.img} 
              alt={con.name}
              posi={con.position} 
              key={i} />
      ) }
    </div>
  );
}

export default App;
