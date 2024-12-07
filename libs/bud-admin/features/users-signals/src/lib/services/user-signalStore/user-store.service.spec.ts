import { TestBed } from '@angular/core/testing';

import { IUser } from '@bud-admin/domain';
import { UserStore } from './user-store.service';

describe('UserStore', () => {
    let userStore: UserStore;

    // Mock user data
    const mockUser: IUser = {
        id: 1,
        name: 'bud',
        email: 'test@example.com',
        phoneNumbers: [1267890, 9843210],
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [UserStore],
        });

        userStore = TestBed.inject(UserStore);
    });

    it('should be created', () => {
        expect(userStore).toBeTruthy();
    });

    it('should initialize user correctly', () => {
        userStore.initUser(mockUser);
        expect(userStore.user()).toEqual(mockUser);
    });

    it('should update user correctly', () => {
        const updatedUser: IUser = {
            ...mockUser,
            name: 'Bud 1',
        };

        userStore.initUser(mockUser); // Initialize with mock user
        userStore.updateUser(updatedUser);

        expect(userStore.user()).toEqual(updatedUser);
    });

    it('should return null when no user is initialized', () => {
        expect(userStore.user()).toBeNull();
    });
});
