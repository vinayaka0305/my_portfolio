// MatterComponent.js
import React, { useEffect } from 'react';
import Matter from 'matter-js';
import $ from 'jquery';
import 'matter-wrap';
import 'matter-attractors';

export default function MatterComponent() {
  useEffect(() => {
    const canvas = $('#wrapper-canvas').get(0);
    const dimensions = {
      width: $(window).width(),
      height: $(window).height(),
    };

    Matter.use('matter-attractors');
    Matter.use('matter-wrap');

    function runMatter() {
      const {
        Engine,
        Events,
        Runner,
        Render,
        World,
        Body,
        Mouse,
        Common,
        Bodies,
      } = Matter;

      const engine = Engine.create();
      engine.world.gravity.y = 0;
      engine.world.gravity.x = 0;
      engine.world.gravity.scale = 0.1;

      const render = Render.create({
        element: canvas,
        engine: engine,
        options: {
          showVelocity: false,
          width: dimensions.width,
          height: dimensions.height,
          wireframes: false,
          background: 'transparent',
        },
      });

      const runner = Runner.create();
      const world = engine.world;

      const attractiveBody = Bodies.circle(
        dimensions.width / 2,
        dimensions.height / 2,
        Math.max(dimensions.width / 25, dimensions.height / 25) / 2,
        {
          isStatic: true,
          plugin: {
            attractors: [
              function (bodyA, bodyB) {
                return {
                  x: (bodyA.position.x - bodyB.position.x) * 1e-6,
                  y: (bodyA.position.y - bodyB.position.y) * 1e-6,
                };
              },
            ],
          },
        }
      );

      World.add(world, attractiveBody);

      for (let i = 0; i < 60; i += 1) {
        const x = Common.random(0, dimensions.width);
        const y = Common.random(0, dimensions.height);
        const s = Common.random() > 0.6 ? Common.random(10, 80) : Common.random(4, 60);
        const polygonNumber = Common.random(3, 6);

        World.add(world, Bodies.polygon(x, y, polygonNumber, s, {
          mass: s / 20,
          friction: 0,
          frictionAir: 0.02,
          angle: Math.round(Math.random() * 360),
          render: {
            fillStyle: '#222222',
            strokeStyle: '#000000',
            lineWidth: 2,
          },
        }));

        const r = Common.random(0, 1);
        World.add(world, Bodies.circle(x, y, Common.random(2, 8), {
          mass: 0.1,
          friction: 0,
          frictionAir: 0.01,
          render: {
            fillStyle: r > 0.3 ? '#27292d' : '#444444',
            strokeStyle: '#000000',
            lineWidth: 2,
          },
        }));

        World.add(world, Bodies.circle(x, y, Common.random(2, 20), {
          mass: 6,
          friction: 0,
          frictionAir: 0,
          render: {
            fillStyle: r > 0.3 ? '#334443' : '#222222',
            strokeStyle: '#111111',
            lineWidth: 4,
          },
        }));

        World.add(world, Bodies.circle(x, y, Common.random(2, 30), {
          mass: 0.2,
          friction: 0.6,
          frictionAir: 0.8,
          render: {
            fillStyle: '#191919',
            strokeStyle: '#111111',
            lineWidth: 3,
          },
        }));
      }

      const mouse = Mouse.create(render.canvas);

      Events.on(engine, 'afterUpdate', function () {
        if (!mouse.position.x) return;
        Body.translate(attractiveBody, {
          x: (mouse.position.x - attractiveBody.position.x) * 0.12,
          y: (mouse.position.y - attractiveBody.position.y) * 0.12,
        });
      });

      const data = {
        engine: engine,
        runner: runner,
        render: render,
        canvas: render.canvas,
        stop() {
          Matter.Render.stop(render);
          Matter.Runner.stop(runner);
        },
        play() {
          Matter.Runner.run(runner, engine);
          Matter.Render.run(render);
        },
      };

      Matter.Runner.run(runner, engine);
      Matter.Render.run(render);
      return data;
    }

    function debounce(func, wait, immediate) {
      let timeout;
      return function () {
        const context = this;
        const args = arguments;
        const later = function () {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    }

    function setWindowSize() {
      dimensions.width = $(window).width();
      dimensions.height = $(window).height();

      m.render.options.width = dimensions.width;
      m.render.options.height = dimensions.height;
      m.render.canvas.width = dimensions.width;
      m.render.canvas.height = dimensions.height;
      Matter.Engine.update(m.engine);
    }

    const m = runMatter();
    setWindowSize();
    $(window).resize(debounce(setWindowSize, 250));

    // Cleanup on component unmount
    return () => {
      m.stop();
      $(window).off('resize');
    };
  }, []);

  return null;
}
