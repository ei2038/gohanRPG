import { Timelines } from '../classes/Timelines';
export const select: Timelines = {
  start: [
    {
      type: 'choice',
      choices: [
        { text: 'stage0', timelineID: 'choice01_a00' },
        { text: 'stage1', timelineID: 'choice01_a01' },
        { text: 'stage2', timelineID: 'choice01_a02' },
        { text: 'stage3', timelineID: 'choice01_a03' },
        { text: 'stage4', timelineID: 'choice01_a04' },
        { text: 'stage5', timelineID: 'choice01_a05' },
      ],
    },
  ],
  choice01_a00: [{ type: 'switch', scene: 'map0' }, { type: 'endTimeline' }],
  choice01_a01: [{ type: 'switch', scene: 'map1' }, { type: 'endTimeline' }],
  choice01_a02: [{ type: 'switch', scene: 'map2' }, { type: 'endTimeline' }],
  choice01_a03: [{ type: 'switch', scene: 'map3' }, { type: 'endTimeline' }],
  choice01_a04: [{ type: 'switch', scene: 'map4' }, { type: 'endTimeline' }],
  choice01_a05: [{ type: 'switch', scene: 'map5' }, { type: 'endTimeline' }],
};

export const warp0: Timelines = {
  start: [{ type: 'switch', scene: 'map0' }, { type: 'endTimeline' }],
};

export const prologue: Timelines = {
  start: [
    {
      type: 'dialog',
      actorName: 'マルク',
      text: 'はぁーあ、最近のヤトウはロクなのがいねぇなぁ…ん？',
    },
    { type: 'dialog', actorName: 'マルク', text: '魔王を倒せたら大盛りご飯無料？？' },
    { type: 'dialog', actorName: 'マルク', text: 'へぇ…腹減ってんだ、ちょうどいい。' },
    {
      type: 'dialog',
      actorName: 'マルク',
      text: '魔王でもヤトウでも、俺が倒してやろうじゃねーか！',
    },
    { type: 'endTimeline' },
  ],
};
