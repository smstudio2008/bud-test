import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { UserService } from './user.service';

import { IUser } from '../../entities/users/user.model';


describe('UserService', () => {
    let service: UserService;
    let httpMock: HttpTestingController;

    const mockUserData = {
        users: [
            {
                id: 1,
                firstName: 'Emily',
                lastName: 'Johnson',
                age: 28,
                gender: 'female',
                email: 'emily.johnson@x.dummyjson.com',
                phone: '+81 965-431-3024',
            },
            {
                id: 2,
                firstName: 'John',
                lastName: 'Doe',
                age: 32,
                gender: 'male',
                email: 'john.doe@example.com',
                phone: '+44 123-456-7890',
            },
        ],
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [UserService],
        });
        service = TestBed.inject(UserService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should retrieve users from the API', () => {
        service.getUsers().subscribe((users: IUser[]) => {
            expect(users.length).toBe(2);
            expect(users[0].firstName).toBe('Emily');
            expect(users[1].firstName).toBe('John');
        });

        const req = httpMock.expectOne('https://dummyjson.com/users');
        expect(req.request.method).toBe('GET');

        req.flush(mockUserData); 
    });
});
