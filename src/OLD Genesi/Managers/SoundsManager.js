import { Sound } from 'evolve-js';
import Core from '../Core';

  /**
   * The sound manager facilitates the use of SoundJS by adding sound groups 
   * and persistent options. This manager is created by the game and can be 
   * accessed using `game.sound`.
   *
   * This manager provides two features to improve SoundJS. The first feature
   * is the capability for you to create sound groups. After creating and 
   * adding sounds to a group, you can play a random registered sound in that
   * group by playing the group itself.
   *
   * The second feature is the capability to remember the sound configuration 
   * by using the storage manager. So when the user set the volume or mute of 
   * the game, these information are stored. Notice that, persistence uses the
   * project name defined in the configuration to store the audio settings, so
   * if you are using the default parameters, you may start with non-default 
   * values (even muted).
   *
   * ## Usage examples
   *
   * Using sound groups:
   *
   *     var game = new tine.Game(null, {
   *       preload: function() {
   *         game.load.audio('my-audio', 'blob.mp3');
   *         game.load.audio('my-audio2', 'blob2.mp3');
   *       },
   *       create: function() {
   *         game.sound.add('my-audio', 'blob effect');
   *         game.sound.add('my-audio2', 'blob effect');
   *         game.sound.play('blob effect');
   *       }
   *     })
   * 
   * @class SoundManager
   * @constructor
   */ 
export default class SoundsManager extends Core.EventDispatcher {
  constructor() {
    super();
    Sound.Sound.initializeDefaultPlugins();
    console.log('constructor exectued');

    // /**
    //  * The sound groups.
    //  * @property {Object} groups
    //  * @private
    //  */
    // this._groups = {};

    // if (this._persistent) {
    //   var volume = this._storage.iget('sound', 'volume');
    //   var mute = this._storage.iget('sound', 'mute');

    //   if (volume === parseFloat(volume)) this.volume = volume;
    //   createjs.Sound.setMute(!!mute);
    // }
  }

  get volume() {
    return Sound.Sound.volume;
  }

  set volume(v) {
    Sound.Sound.volume = v;
  }


  get muted() {
    return Sound.Sound.muted;
  }

  set muted(m) {
    Sound.Sound.muted = m;
  }

  // /**
  //  * Returns the current master volume. Same as `createjs.Sound.getVolume()`.
  //  *
  //  * @method getVolume
  //  * @return {Number} The master volume (between 0 and 1).
  // **/
  // p.getVolume = function() {
  //   return createjs.Sound.getVolume();
  // }

  // /**
  //  * Set the current master volume. Save it to the local storage if needed.
  //  *
  //  * @method setVolume
  //  * @param {Number} value The master volume (between 0 and 1).
  // **/
  // p.setVolume = function(value) {
  //   var value = creatine.clip(value, 0, 1);
  //   createjs.Sound.setVolume(value);
  //   if (this._persistent) {
  //     this._storage.iset('sound', 'volume', value);
  //   };
  // }

  // /**
  //  * Return is the manager is using the persistence or not.
  //  *
  //  * @method getPersistent
  //  * @return {Boolean} The persistence status.
  // **/
  // p.getPersistent = function() {
  //   return this._persistent;
  // }

  // /**
  //  * Set persistence the persistence status.
  //  *
  //  * @method setPersistent
  //  * @return {Boolean} value The persistence status.
  // **/
  // p.setPersistent = function(value) {
  //   this._persistent = value;
  //   if (this._persistent) {
  //     this._storage.iset('sound', 'volume', this.getVolume);
  //   }
  // }


  // //---------------------------------------------------------------------------
  // // GROUP ACCESS (FOR RANDOM PLAY)
  // //---------------------------------------------------------------------------
  // /**
  //  * Adds a sound to a sound group.
  //  *
  //  * @method add
  //  * @param {String} sound The sound name (as registered in resource manager).
  //  * @param {String} group The group name.
  // **/
  // p.add = function(sound, group) {
  //   if (!sound) throw new Error('Sound name is mandatory.');
  //   if (!group) throw new Error('Group name is mandatory.');

  //   if (!this._groups[group]) {
  //     this._groups[group] = [];
  //   }

  //   this._groups[group].push(sound);
  // }

  // /**
  //  * Removes a sound from a sound group.
  //  *
  //  * @method remove
  //  * @param {String} sound The sound name (as registered in resource manager).
  //  * @param {String} group The group name.
  // **/
  // p.remove = function(sound, group) {
  //   if (!sound) throw new Error('Sound name is mandatory.');
  //   if (!group) throw new Error('Group name is mandatory.');

  //   var sounds = this._groups[group]
  //   if (!sounds) return;
    
  //   for (var i=0; i<sounds.length; i++) {
  //     if (sounds[i] == sound) {
  //       sounds.splice(i, 1);
  //       return;
  //     }
  //  }
  // }


  // //---------------------------------------------------------------------------
  // // CORE METHODS
  // //---------------------------------------------------------------------------
  // /**
  //  * Play a sound. If the name is a group in sound groups, play a random
  //  * sound in that group.
  //  *
  //  * @method play
  //  * @param {String} name The audio ID or group name.
  //  * @param {String | Object} [interrupt="none"|options] How to interrupt any 
  //  * currently playing instances of audio with the same source, see the API for
  //  * SoundJS to know more.
  //  * @param {Number} [delay=0] The amount of time to delay the start of audio 
  //  * playback, in milliseconds.
  //  * @param {Number} [offset=0] The offset from the start of the audio to begin
  //  * playback, in milliseconds.
  //  * @param {Number} [loop=0] How many times the audio loops when it reaches 
  //  * the end of playback. The default is 0 (no loops), and -1 can be used for 
  //  * infinite playback.
  //  * @param {Number} [volume=1] The sound volume. 
  //  * @param {Number} [pan=0] The left-right pan of the sound (if supported), 
  //  * between -1 (left) and 1 (right).
  //  * @return {SoundInstance} A "SoundInstance" that can be controlled after it
  //  * is created.
  // **/
  // p.play = function(name, interrupt, delay, offset, loop, volume, pan) {
  //   var group = this._groups[name];

  //   if (group) {
  //     var idx = creatine.randomInt(0, group.length-1);
  //     name = group[idx];
  //   }

  //   return createjs.Sound.play(name, interrupt, delay, offset, loop, volume, pan);
  // }

  // /**
  //  * Mute/Unmute all audio. Same as setting mute on SoundJS but with 
  //  * persistence if enabled.
  //  *
  //  * @method toogleMute
  // **/
  // p.toogleMute = function() {
  //   if (createjs.Sound.getMute()) {
  //     var value = false;
  //   } else {
  //     var value = true;
  //   }
  //   createjs.Sound.setMute(value);
  //   this._storage.iset('sound', 'mute', value);
  // }

  // /**
  //  * It is muted or note?
  //  *
  //  * @method isMute
  //  * @returns {Boolean} `true` if game is muted or `false` if it is not.
  // **/
  // p.isMute = function() {
  //   return createjs.Sound.getMute();
  // }

  // play(props) {
  //   console.log('adding layer ', props);
  //   const instance = new Sound.SoundElement(props);
  //   SoundManager._instances = [];
  //   Core.Ticker.addEventListener('tick', SoundManager.onSoundTick);
  //   SoundManager.addLayer(instance);

  //   instance.instance.on('complete', () => {
  //     SoundManager.removeLayer(instance);
  //   });

  //   return instance;
  // }

  // addLayer(instance) {
  //   SoundManager._instances.push({
  //     instance,
  //     playing: true,
  //   });
  // }

  // removeLayer(instance) {
  //   SoundManager._instances.remove(instance);
  // }

  // handleSoundTick() {
  //   if(SoundManager._instances.length > 0) {
  //     const toFade = SoundManager._instances.findBy((o) => {
  //       return (Object.isObject(o.instance.props.fade) && o.instance.props.fade.type);
  //     });

  //     toFade.each((i) => {
  //       if(!!i.instance) {
  //         if((i.props.fade.type === 'FADE_IN' || i.props.fade.type === 'FADE_ALL')) {
  //           if(i.instance.position === 0) {
  //             i.instance.volume = 0;
  //           } else if(i.instance.position < i.props.fade.duration) {
  //             i.instance.volume = (1 / i.props.fade.duration) * i.instance.position;
  //           }
  //         }

  //         if((i.props.fade.type === 'FADE_OUT' || i.props.fade.type === 'FADE_ALL')) {
  //           if(i.instance.position > i.instance.duration - i.props.fade.duration) {
  //             const fadeOutStart = (i.instance.duration - i.props.fade.duration);
  //             const backPosition = (i.instance.position - fadeOutStart);

  //             i.instance.volume = 1 - ((1 / i.props.fade.duration) * backPosition);
  //           }
  //         }
  //       }
  //     });
  //   }
  // }

  // mute() {
  //   Sound.Sound.muted = true;
  // }

  // unmute() {
  //   Sound.Sound.muted = false;
  // }
}
