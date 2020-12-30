import { Dimensions } from 'react-native'

const params = {
    blockSize: 30,
    borderSize: 5,
    fontSize: 15,
    headerRatio: 0.15, // proporção do painel superior na tela
    difficultLevel: 0.1, //nivel de dificuldade do jogo
    /* definindo um tamanho padeão para o tamanho da tela
    no jogo, quantidade de linhas e colunas 
    */
    getColumnsAmount() {
        const width = Dimensions.get('window').width
        return Math.floor(width / this.blockSize)
    },

    getRowsAmount() {
        const totalHeight = Dimensions.get('window').height
        const boardHeight = totalHeight * (1 - this.headerRatio)
        return Math.floor(boardHeight / this.blockSize)
    }
}

export default params