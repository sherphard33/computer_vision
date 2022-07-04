class Drive {
  constructor(x, y, controls, speed, maxSpeed, friction, angle) {
    this.speed = speed;
    this.controls = controls;
    this.maxSpeed = maxSpeed;
    this.friction = friction;
    this.angle = angle;
    this.x = x;
    this.y = y;
    this.drive();
  }

  drive() {
    if (this.controls.forward) {
      this.speed += this.acceleration;
    }
    if (this.controls.reverse) {
      this.speed -= this.acceleration;
    }
    if (this.speed != 0) {
      const flip = this.speed > 0 ? 1 : -1;
      if (this.controls.left) {
        this.angle += 0.02 * flip;
      }
      if (this.controls.right) {
        this.angle -= 0.02 * flip;
      }
    }

    if (this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed;
    }
    if (this.speed < -this.maxSpeed / 2) {
      this.speed = -this.maxSpeed / 2;
    }
    if (this.speed > 0) {
      this.speed -= this.friction;
    }
    if (this.speed < 0) {
      this.speed += this.friction;
    }
    if (Math.abs(this.speed) < this.friction) {
      this.speed = 0;
    }
    //Unit circle equations
    this.x -= Math.sin(this.angle) * this.speed;
    this.y -= Math.cos(this.angle) * this.speed;
  }
}
