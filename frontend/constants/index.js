import {Dimensions} from 'react-native'

export const SCREEN_WIDTH = Dimensions.get('window').width

// N'oublie pas de specifier addresse ip:8000 apres
// le manage.py au backend
//export const HOST_ADDRESS = 'http://192.168.0.22';
//export const HOST_ADDRESS = 'http://10.159.139.194';
export const HOST_ADDRESS = 'http://192.168.200.83'; //train

// Schémas
export const PRIMARYCOLOR = "#337CFF"//"#c4fcd7"
export const SECONDARYCOLOR = "#F5F6F8"//"#b9d4c5"
export const TERTIARYCOLOR = "#FFFFFF"
export const BLACK = "#000000"//"#5a6560"
export const GREY = "#BBBCBE"
export const ERRORCOLOR = "#AB2328"
export const SUCCESSCOLOR = "#028A0F"

//Police, tailles etc.
export const FONTFAMILY = 'Nunito'
export const FONTFAMILYBOLD = 'Nunito Bold'
export const H1FONTSIZE = 28
export const H2FONTSIZE = 20
export const H3FONTSIZE = 16
export const CONTENTFONTSIZE = 14

// LearnScreen
export const DOUBLETAPDELAY = 200 // en millisecondes
export const TRANSLATIONDISPLAYTIME = 1500
