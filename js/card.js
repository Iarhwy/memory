export default class Card {
   _card
   _open = false
   _success = false

   constructor(container, number, action) {
      this.card = document.createElement('div')
      this.card.classList.add('card')
      this.card.textContent = number
      this.number = number
      this.card.addEventListener('click', () => {
         if (this.open == false && this.success == false) {
            this.open = true
            action(this)
         }
      })
      container.append(this.card)
   }

   set open(val) {
      this._open = val
      val ? this.card.classList.add('open') : this.card.classList.remove('open')
   }
   get open() {
      return this._open
   }

   set success(val) {
      this._success = val
      val ? this.card.classList.add('success') : this.card.classList.remove('success')
   }
   get success() {
      return this._success
   }
}

export class AmazingCard extends Card {
   constructor(container, number, action) {
      super(container, number, action)
      const cardsImgArray = [
         '1','2','3','4','5',
         '6','7','8','9','10',
         '11','12'
      ]
      const img = document.createElement('img')
      for (let i = 0; i < cardsImgArray.length; i++) {
         if (number == parseInt(cardsImgArray[i])) {
            img.src = `./img/${cardsImgArray[i]}.png`
            img.style.zIndex = '0'
            this.card.append(img)
         }
      }
   }
}
