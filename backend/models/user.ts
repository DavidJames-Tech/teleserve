interface UserInterface {
    __id: string;

}

interface UserActions {
    /**
     * @description creates new user
     */
    spawn(): UserModel;
    edit(): void;
    drop(): void;
}

class UserModel implements UserInterface {
    __id: string;
}


const User: UserActions = {

    spawn(): UserModel {
        return new UserModel();
    },

    edit() {
        
    },

    drop() {
        
    },
}
