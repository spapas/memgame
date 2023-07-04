import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import React from 'react'
import { useImmer } from "use-immer";


const imgsrc = ` photo_000.thumbnail.jpg   photo_001.thumbnail.jpg   photo_002.thumbnail.jpg   photo_003.thumbnail.jpg   photo_004.thumbnail.jpg
photo_005.thumbnail.jpg   photo_006.thumbnail.jpg   photo_007.thumbnail.jpg   photo_008.thumbnail.jpg   photo_009.thumbnail.jpg   photo_010.thumbnail.jpg   photo_012.thumbnail.jpg
photo_013.thumbnail.jpg   photo_014.thumbnail.jpg   photo_015.thumbnail.jpg   photo_016.thumbnail.jpg   photo_017.thumbnail.jpg   photo_019.thumbnail.jpg   photo_020.thumbnail.jpg
photo_021.thumbnail.jpg   photo_022.thumbnail.jpg   photo_023.thumbnail.jpg   photo_024.thumbnail.jpg   photo_025.thumbnail.jpg   photo_026.thumbnail.jpg   photo_027.thumbnail.jpg
photo_028.thumbnail.jpg   photo_029.thumbnail.jpg   photo_030.thumbnail.jpg   photo_031.thumbnail.jpg   photo_032.thumbnail.jpg   photo_033.thumbnail.jpg   photo_034.thumbnail.jpg
photo_035.thumbnail.jpg   photo_036.thumbnail.jpg   photo_038.thumbnail.jpg   photo_039.thumbnail.jpg   photo_040.thumbnail.jpg   photo_041.thumbnail.jpg   photo_042.thumbnail.jpg
photo_043.thumbnail.jpg   photo_044.thumbnail.jpg   photo_045.thumbnail.jpg   photo_046.thumbnail.jpg   photo_047.thumbnail.jpg   photo_048.thumbnail.jpg   photo_049.thumbnail.jpg
photo_050.thumbnail.jpg   photo_051.thumbnail.jpg   photo_052.thumbnail.jpg   photo_053.thumbnail.jpg   photo_054.thumbnail.jpg   photo_055.thumbnail.jpg   photo_056.thumbnail.jpg
photo_057.thumbnail.jpg   photo_058.thumbnail.jpg   photo_059.thumbnail.jpg   photo_060.thumbnail.jpg   photo_061.thumbnail.jpg   photo_062.thumbnail.jpg   photo_063.thumbnail.jpg
photo_064.thumbnail.jpg   photo_065.thumbnail.jpg   photo_066.thumbnail.jpg   photo_067.thumbnail.jpg   photo_068.thumbnail.jpg   photo_069.thumbnail.jpg   photo_070.thumbnail.jpg
photo_071.thumbnail.jpg   photo_072.thumbnail.jpg   photo_073.thumbnail.jpg   photo_074.thumbnail.jpg   photo_075.thumbnail.jpg   photo_076.thumbnail.jpg   photo_077.thumbnail.jpg
photo_078.thumbnail.jpg   photo_079.thumbnail.jpg   photo_080.thumbnail.jpg   photo_081.thumbnail.jpg   photo_082.thumbnail.jpg   photo_083.thumbnail.jpg   photo_085.thumbnail.jpg
photo_086.thumbnail.jpg   photo_087.thumbnail.jpg   photo_088.thumbnail.jpg   photo_089.thumbnail.jpg   photo_090.thumbnail.jpg   photo_091.thumbnail.jpg   photo_092.thumbnail.jpg
photo_094.thumbnail.jpg   photo_095.thumbnail.jpg   photo_096.thumbnail.jpg   photo_097.thumbnail.jpg   photo_099.thumbnail.jpg   photo_100.thumbnail.jpg   photo_101.thumbnail.jpg
photo_102.thumbnail.jpg   photo_103.thumbnail.jpg   photo_104.thumbnail.jpg   photo_105.thumbnail.jpg   photo_106.thumbnail.jpg   photo_107.thumbnail.jpg   photo_109.thumbnail.jpg
photo_110.thumbnail.jpg   photo_113.thumbnail.jpg   photo_114.thumbnail.jpg   photo_115.thumbnail.jpg   photo_116.thumbnail.jpg   photo_117.thumbnail.jpg   photo_118.thumbnail.jpg
photo_119.thumbnail.jpg   photo_120.thumbnail.jpg   photo_121.thumbnail.jpg   photo_123.thumbnail.jpg   photo_124.thumbnail.jpg   photo_125.thumbnail.jpg   photo_127.thumbnail.jpg
photo_128.thumbnail.jpg   photo_129.thumbnail.jpg   photo_130.thumbnail.jpg   photo_131.thumbnail.jpg   photo_132.thumbnail.jpg   photo_133.thumbnail.jpg   photo_134.thumbnail.jpg
photo_135.thumbnail.jpg   photo_136.thumbnail.jpg   photo_137.thumbnail.jpg   photo_138.thumbnail.jpg   photo_139.thumbnail.jpg   photo_140.thumbnail.jpg   photo_141.thumbnail.jpg
photo_142.thumbnail.jpg   photo_143.thumbnail.jpg   photo_144.thumbnail.jpg   photo_145.thumbnail.jpg   photo_146.thumbnail.jpg   photo_147.thumbnail.jpg   photo_148.thumbnail.jpg
photo_149.thumbnail.jpg   photo_150.thumbnail.jpg   photo_151.thumbnail.jpg   photo_152.thumbnail.jpg   photo_153.thumbnail.jpg   photo_154.thumbnail.jpg   photo_155.thumbnail.jpg
photo_156.thumbnail.jpg   photo_157.thumbnail.jpg   photo_158.thumbnail.jpg   photo_159.thumbnail.jpg   photo_160.thumbnail.jpg   photo_161.thumbnail.jpg   photo_162.thumbnail.jpg
photo_163.thumbnail.jpg   photo_164.thumbnail.jpg   photo_165.thumbnail.jpg   photo_166.thumbnail.jpg   photo_167.thumbnail.jpg   photo_168.thumbnail.jpg   photo_169.thumbnail.jpg
photo_170.thumbnail.jpg   photo_171.thumbnail.jpg   photo_172.thumbnail.jpg   photo_173.thumbnail.jpg   photo_174.thumbnail.jpg   photo_175.thumbnail.jpg   photo_176.thumbnail.jpg
photo_178.thumbnail.jpg   photo_179.thumbnail.jpg   photo_180.thumbnail.jpg   photo_182.thumbnail.jpg   photo_183.thumbnail.jpg   photo_184.thumbnail.jpg   photo_185.thumbnail.jpg
photo_186.thumbnail.jpg   photo_187.thumbnail.jpg   photo_188.thumbnail.jpg   photo_189.thumbnail.jpg   photo_190.thumbnail.jpg   photo_191.thumbnail.jpg   photo_192.thumbnail.jpg
photo_193.thumbnail.jpg   photo_194.thumbnail.jpg   photo_195.thumbnail.jpg   photo_196.thumbnail.jpg   photo_197.thumbnail.jpg   photo_198.thumbnail.jpg   photo_199.thumbnail.jpg`

function randomPick(n) {
  const images = imgsrc.split(/[ \s]+/).map(n => 'thumbs/'+n).filter(n => n!='thumbs/');
  const shuffled = images.sort(() => 0.5 - Math.random());

  return shuffled.slice(0, n);

}


export default function App() {
  
  let images = randomPick(8)
  images = images.concat(images).sort(() => 0.5 - Math.random());
  const initialState = {
    cards: images.map( (src, idx) => ({ idx: idx, src: src, isOpen: false, matched: false })),
    firstCard: null,
    secondCard: null,
    tries: 0,
    wait: false
  }
  const [state, setState] = useImmer(initialState)
  const wait = state.wait
  React.useEffect(() => {
    console.log("EFF", wait)
    if (!wait) return
    const timer = setTimeout(() => {
      setState(draft => {
        draft.cards[draft.firstCard].isOpen = false
        draft.cards[draft.secondCard].isOpen = false
        draft.firstCard = null
        draft.secondCard = null
        draft.wait = false
      })
    }, 1000)
  }, [wait]);

  const onCardClick = (idx) => {
    if(state.wait) return 
    if (state.cards[idx].isOpen) return
    

    setState(draft => {
      
      draft.cards[idx].isOpen = true
      if (draft.firstCard === null) {
        draft.firstCard = idx
      } else {
        draft.tries++
        if (draft.cards[draft.firstCard].src === draft.cards[idx].src) {
          draft.cards[draft.firstCard].matched = true
          draft.cards[idx].matched = true
          draft.cards[draft.firstCard].isOpen = true
          draft.cards[idx].isOpen = true
          draft.firstCard = null
        } else {
          //draft.cards[draft.firstCard].isOpen = false
          //draft.cards[idx].isOpen = false
          draft.secondCard = idx
          draft.wait = true
        }
      }
    })

  }
  
  return <>
    <Navbar />
    <Hero tries={state.tries} />
    <div className="grid grid-cols-4 gap-4 w-1/2 m-auto">
      {state.cards.map(card => <Card key={card.idx} onClick={onCardClick} {...card} />)}

    </div>
  </>
}
