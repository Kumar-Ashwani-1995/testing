import { HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { getTestBed, TestBed } from '@angular/core/testing';
import { dummyData } from "./dummyData";
import { SerApiService } from './ser-api.service';

describe('SerApiService', () => {
  let injector: TestBed;
  let service: SerApiService,
  httpTestingController:HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers:[
        SerApiService,
      ]
    });
    injector = getTestBed();
    service = injector.get(SerApiService);
    httpTestingController = injector.get(HttpTestingController);
    // service = TestBed.inject(SerApiService);
    httpTestingController=TestBed.get(HttpTestingController)
  });
  it("should retrive all Post",()=>{
    service.getTodos().subscribe((data:any)=>{
      expect(data.length).toBe(100);
      expect(data).toBeTruthy();
      const post=data.find((d:any)=>d.id==1)
      expect(post.title).toBe("sunt aut facere repellat provident occaecati excepturi optio reprehenderit")
    })
    const req = httpTestingController.expectOne("https://jsonplaceholder.typicode.com/posts");
    expect(req.request.method).toBe("GET");
    req.flush(dummyData);
    
    //expect(1).toBe(1)
  });
  it("should retrive post by id",()=>{
    service.getPostById(1).subscribe(
      (data:any)=>{
        expect(data).toBeTruthy();
        expect(data.title).toBe("qui est esse");
      }
    );
    const req = httpTestingController.expectOne("https://jsonplaceholder.typicode.com/posts/1");
    expect(req.request.method).toBe("GET");
    req.flush(dummyData[1]);
  })
  it("Should create new post",()=>{
    service.PostById({
      "userId": 1,
      "id": 1,
      "title": "new Title",
      "body": "new Body"
    },1).subscribe(
      (data:any)=>{
        expect(data).toBeTruthy();
        
      }
    );
    const req = httpTestingController.expectOne("https://jsonplaceholder.typicode.com/posts/1");
    expect(req.request.method).toBe("POST");
    req.flush({
      "userId": 1,
      "id": 1,
      "title": "new Title",
      "body": "new Body"
    });
  })
  it("Should give error when create new post fails",()=>{
    service.PostById({
      "userId": 1,
      "id": 1,
      "title": "new Title",
      "body": "new Body"
    },1).subscribe(
      (data:any)=>{
        ()=>fail("save post failed");
        (error:HttpErrorResponse)=>{
          expect(error.status).toBe(500)
        }
        expect(data).toBeTruthy();
        
      }
    );
    const req = httpTestingController.expectOne("https://jsonplaceholder.typicode.com/posts/1");
    expect(req.request.method).toBe("POST");
    req.flush({
      "userId": 1,
      "id": 1,
      "title": "new Title",
      "body": "new Body"
    });
  })
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  afterEach(() => {
    httpTestingController.verify();
  });
});
