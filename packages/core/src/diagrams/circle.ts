import { Pen } from '../pen';

export function circle(pen: Pen, ctx?: CanvasRenderingContext2D): Path2D {
  const path = !ctx ? new Path2D() : ctx;
  const { angle } = pen;
  const { x, y, width, height } = pen.calculative.worldRect;
  let radiusX = width / 2;
  let radiusY = height / 2;
  let centerX = x + width / 2;
  let centerY = y + height / 2;
  if(!angle){
    //
  } else if (angle <= 90) {
    centerX = x;
    centerY = y;
    radiusX=width;
    radiusY=height;
  }else if(angle<= 180){
    centerY= y;
    radiusY=height;
  }
  path.ellipse(
    centerX,
    centerY,
    radiusX,
    radiusY,
    0,
    0,
      angle ? angle / 180 * Math.PI : Math.PI * 2
  );
  if(angle && angle < 360){
    path.lineTo(centerX, centerY);
    path.closePath();
  }
  if (path instanceof Path2D) {
    return path;
  }
}
