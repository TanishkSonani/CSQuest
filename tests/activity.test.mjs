import test from 'node:test';
import assert from 'node:assert/strict';
import {monthActivity,activityStreaks,shiftMonth,cleanDaily} from '../packages/learning/activity.js';
import {habitSummary} from '../packages/learning/experience.js';

test('monthly activity includes every calendar day, leap years, empty days and cross-year navigation',()=>{
 const daily={'2024-02-28':40,'2024-02-29':60,'2024-03-01':20};
 const feb=monthActivity(daily,'2024-02','2024-03-02');
 assert.equal(feb.days.length,29);assert.equal(feb.offset,3);assert.equal(feb.xp,100);assert.equal(feb.activeDays,2);assert.equal(feb.best,3);assert.equal(feb.current,3);
 assert.equal(monthActivity(daily,'2023-02','2024-03-02').days.length,28);
 assert.equal(monthActivity({},'2024-01','2024-03-02').days.length,31);
 assert.equal(shiftMonth('2024-01',-1),'2023-12');assert.equal(shiftMonth('2023-12',1),'2024-01');
 assert.equal(monthActivity(daily,'2024-03','2024-03-02').days.filter(day=>day.future).length,29);
 assert.throws(()=>monthActivity(daily,'2024-04','2024-03-02'));
 assert.throws(()=>monthActivity(daily,'2024-13','2024-03-02'));
});
test('daily activity excludes invalid, future and negative XP and preserves all subjects and historic dates',()=>{
 const daily=cleanDaily({'2024-02-30':50,'invalid':30,'2024-01-01':-2,'2024-03-03':60,'2024-02-29':40,'2024-02-28':Infinity},'2024-03-02');
 assert.deepEqual(daily,{'2024-02-29':40});
 const habit=habitSummary([{version:1,daily:{'2024-02-29':40,'2024-03-01':20}},{version:1,daily:{'2024-02-29':60}}],'2024-03-02');
 assert.equal(habit.daily['2024-02-29'],100);assert.equal(monthActivity(habit.daily,'2024-02','2024-03-02').xp,100);
 assert.deepEqual(activityStreaks({'2024-03-09':10,'2024-03-10':10,'2024-03-11':10},'2024-03-12'),{current:3,best:3,studyDays:3});
 assert.equal(activityStreaks({'2024-03-09':10},'2024-03-12').current,0);
});
