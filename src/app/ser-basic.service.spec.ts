import { TestBed } from '@angular/core/testing';

import { SerBasicService } from './ser-basic.service';
import { SerLoggingService } from './ser-logging.service';

describe('SerBasicService', () => {
// fdescribe('SerBasicService', () => {    focus
// xdescribe('SerBasicService', () => {     dont text
  let service: SerBasicService;
  var cal:any;
  var logger:any;
  beforeEach(() => {
    logger=jasmine.createSpyObj('SerLoggingService',['log'])//fake service
    //cal=new SerBasicService(logger)
    TestBed.configureTestingModule({
      providers:[
        SerBasicService,
        {provide:SerLoggingService,useValue:logger}
      ]
    });
    // service = TestBed.inject(SerBasicService);
    service = TestBed.get(SerBasicService);
  });

  
  it("should Add 2 number",()=>{     // f and x to focus and ignore
    // var logger=new SerLoggingService();
    // var logger=jasmine.createSpyObj('SerLoggingService',['log'])//fake service
    //spyOn(logger,"log")
    // var cal=new SerBasicService(logger)
    const result=service.add(1,3);
    expect(logger.log).toHaveBeenCalledTimes(1)
    expect(result).toBe(4,"unexpected Sum result")
  });

  it("should subtract 2 number",()=>{
     
    const result=service.subtract(3,1);
    expect(logger.log).toHaveBeenCalledTimes(1)
    expect(result).toBe(2,"unexpected Sum result")
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it("Case pending",()=>{
    pending();
  });
});
