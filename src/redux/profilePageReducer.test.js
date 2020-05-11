import profilePageReducer from "./profilePageReducer";
import {addPostActionCreator , deletePostActionCreator} from './profilePageReducer'

let state = {
    posts: [
        {message: 'Hello word', id: 1},
        {message: 'Hello  puki4', id: 2},
        {message: "Привет, Пятро", id: 3},
        {message: 'First Post', id: 4}
    ]
}

it('length of posts should be incremented' , () => {
    
    let action = addPostActionCreator("ПУкич молодец");
    let newState = profilePageReducer(state , action)
    // 3 expectation
    expect(newState.posts.length).toBe(5);
   
})


it('message of new Post should be Пукиц Молодец' , () => {
    
    let action = addPostActionCreator("ПУкич молодец");
    let newState = profilePageReducer(state , action)
    // 3 expectation
    
    expect(newState.posts[4].message).toBe("ПУкич молодец");
})

it('after deliting posts lenght should be decremented' , () => {
    //1 start data
    let action = deletePostActionCreator(1);
    let newState = profilePageReducer(state , action)
    // 3 expectation
    
    expect(newState.posts.length).toBe(3);
})
