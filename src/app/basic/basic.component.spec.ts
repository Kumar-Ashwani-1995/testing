import { DebugElement } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { dummyData } from "../dummyData";

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SerApiService } from '../ser-api.service';

import { BasicComponent } from './basic.component';
import { By } from '@angular/platform-browser';

describe('BasicComponent', () => {
  let component: BasicComponent;
  let fixture: ComponentFixture<BasicComponent>;
  let el:DebugElement;
  let apiSer=SerApiService;
  let sps:any
  beforeEach(async () => {
   let api=jasmine.createSpyObj('SerApiService',['getTodos'])
    await TestBed.configureTestingModule({
      declarations: [ BasicComponent ],
      imports: [HttpClientTestingModule],
    providers:[
      //SerApiService,
       //{provide:SerApiService,useValue:api}
    ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    
    fixture = TestBed.createComponent(BasicComponent);
    component = fixture.componentInstance;
    sps = fixture.debugElement.injector.get(SerApiService) as SerApiService;
    
    el=fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display post list' , ()=>{

    apiSer = TestBed.get(SerApiService);
    console.log(sps)
    component.arr=dummyData;
    //console.log(component.arr+" log");
    fixture.detectChanges();
    const posts=el.queryAll(By.css('.post-element'))
    expect(posts).toBeTruthy("could not find posts");
    expect(posts.length).toBe(100)
  })
  it('should display first post correct' , ()=>{
    component.arr=dummyData;
    fixture.detectChanges();
    const firstPost=component.arr[0];
    
    const posts=el.query(By.css('.post-element:first-child'))
    const title=el.query(By.css('.post-title'))
    expect(posts).toBeTruthy("could not find post");
    //console.log(firstPost.title,title.nativeElement.textContent);

    expect(title.nativeElement.textContent).toBe(" Title:"+firstPost.title+" ")
    
  })
  it('value is shown correctly for false',()=>{
    component.boolValue=false;
    fixture.detectChanges();
    const val=el.query(By.css('.false'))
    expect(val).toBeTruthy("could not find post");
  })
  it('value is shown correctly for True',()=>{
    component.boolValue=true;
    fixture.detectChanges();
    const val=el.query(By.css('.true'))
    expect(val).toBeTruthy("could not find post");
  })
});
