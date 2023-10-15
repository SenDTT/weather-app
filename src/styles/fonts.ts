import { Inter, Lora, Source_Sans_3 } from 'next/font/google'
//import localFont from 'next/font/local'
 
// define your variable fonts
const inter = Inter({ subsets: ['latin'] })
const lora = Lora({ subsets: ['latin'] })
// define 2 weights of a non-variable font
const sourceCodePro400 = Source_Sans_3({ weight: '400', subsets: ['latin'] })
const sourceCodePro700 = Source_Sans_3({ weight: '700', subsets: ['latin'] })
// define a custom local font where GreatVibes-Regular.ttf is stored in the styles folder
//const greatVibes = localFont({ src: './GreatVibes-Regular.ttf' })
 
export { inter, lora, sourceCodePro400, sourceCodePro700 }