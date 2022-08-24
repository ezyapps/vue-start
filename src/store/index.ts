import { createStore } from 'vuex'
export const store = createStore({
        state () {
          return {
            count: 10,
            books: [
              {id: 1, issbn:'1223', title: 'The test book', quantity: 5}
            ]
          }
        },
        mutations: {
          increment (state) {
            state.count++
          },
          pushBook(state, book) {
            state.books.push(book);
          }
        }
      })