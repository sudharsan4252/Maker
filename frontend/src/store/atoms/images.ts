import {atom} from 'recoil'

export const imageStatus= atom({
    key:"imagestatus",
    default:false,
})

export const imagesUrl = atom({
    key:"imagesurl",
    default:[""],
})