"use strict";

var SphubePoint2D = function SphubePoint2D(x, y) {
  this.x = x;
  this.y = y;
};

var SphubePoint3D = function SphubePoint3D(x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;
};

var SphubeEdge = function SphubeEdge(x, y, z, size) {
  SphubePoint3D.call(this, x, y, z);
  size *= 0.25;
  this.vertices = [///front
  new SphubePoint3D(x - size, y - size, z - size * sphubeSize), new SphubePoint3D(x + size, y - size, z - size * sphubeSize), new SphubePoint3D(x + size, y + size, z - size * sphubeSize), new SphubePoint3D(x - size, y + size, z - size * sphubeSize), //back
  new SphubePoint3D(x - size, y - size, z + size * sphubeSize), new SphubePoint3D(x + size, y - size, z + size * sphubeSize), new SphubePoint3D(x + size, y + size, z + size * sphubeSize), new SphubePoint3D(x - size, y + size, z + size * sphubeSize), //left
  new SphubePoint3D(x - size * sphubeSize, y - size, z - size), new SphubePoint3D(x - size * sphubeSize, y - size, z + size), new SphubePoint3D(x - size * sphubeSize, y + size, z + size), new SphubePoint3D(x - size * sphubeSize, y + size, z - size), //right
  new SphubePoint3D(x + size * sphubeSize, y - size, z + size), new SphubePoint3D(x + size * sphubeSize, y - size, z - size), new SphubePoint3D(x + size * sphubeSize, y + size, z - size), new SphubePoint3D(x + size * sphubeSize, y + size, z + size), //bottom
  new SphubePoint3D(x - size, y + size * sphubeSize, z + size), new SphubePoint3D(x + size, y + size * sphubeSize, z + size), new SphubePoint3D(x + size, y + size * sphubeSize, z - size), new SphubePoint3D(x - size, y + size * sphubeSize, z - size), //top
  new SphubePoint3D(x - size, y - size * sphubeSize, z + size), new SphubePoint3D(x + size, y - size * sphubeSize, z + size), new SphubePoint3D(x + size, y - size * sphubeSize, z - size), new SphubePoint3D(x - size, y - size * sphubeSize, z - size)];
  this.faces = [//front
  [0, 1, 2, 3], //back
  [4, 5, 6, 7], //left
  [8, 9, 10, 11], //right
  [12, 13, 14, 15], //bottom
  [16, 17, 18, 19], //top
  [20, 21, 22, 23], //front left
  [0, 8, 11, 3], //front right
  [1, 13, 14, 2], //front bottom
  [3, 19, 18, 2], //front top
  [0, 23, 22, 1], //back left
  [4, 9, 10, 7], //back right
  [5, 12, 15, 6], //back bottom
  [7, 16, 17, 6], //back top
  [4, 20, 21, 5], //top left
  [23, 8, 9, 20], //top right
  [22, 13, 12, 21], //bottom left
  [19, 11, 10, 16], //bottom right
  [18, 14, 15, 17]];
};

SphubeEdge.prototype = {
  rotateX: function rotateX(radian) {
    var cosine = Math.cos(radian);
    var sine = Math.sin(radian);

    for (var i = this.vertices.length - 1; i > -1; --i) {
      var p = this.vertices[i];
      var y = (p.y - this.y) * cosine - (p.z - this.z) * sine;
      var z = (p.y - this.y) * sine + (p.z - this.z) * cosine;
      p.y = y + this.y;
      p.z = z + this.z;
    }
  },
  rotateY: function rotateY(radian) {
    var cosine = Math.cos(radian);
    var sine = Math.sin(radian);

    for (var i = this.vertices.length - 1; i > -1; --i) {
      var p = this.vertices[i];
      var x = (p.x - this.x) * cosine - (p.z - this.z) * sine;
      var z = (p.x - this.x) * sine + (p.z - this.z) * cosine;
      p.x = x + this.x;
      p.z = z + this.z;
    }
  }
};

function sphubeProject(points3d, w, h, zoom) {
  var points2d = new Array(points3d.length);
  var focal_length = zoom;

  for (var i = points3d.length - 1; i > -1; --i) {
    var p = points3d[i];
    var x = p.x * (focal_length / p.z) + w * 0.5;
    var y = p.y * (focal_length / p.z) + h * 0.5;
    points2d[i] = new SphubePoint2D(x, y);
  }

  return points2d;
}