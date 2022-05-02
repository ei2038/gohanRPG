import { Skill } from 'classes/Skill';
import { BattleActor } from 'classes/BattleActor';
import { Scene } from 'phaser';
import {
  arthralgiaForAll,
  atrnoseibi,
  attackdoping,
  batmobiru,
  blackbox,
  breakdance,
  bresscare,
  diemaho,
  dokuhoushi,
  doujou,
  firebress,
  fuuka,
  glucosamineForAll,
  hagaizime,
  hakidas,
  hakusinGyoi,
  hanihant,
  hanran,
  hasamikom,
  heal,
  healContinueForAll,
  hishinoR,
  insert,
  isekaitense,
  jikakkakun,
  kakokyu,
  katakunaru,
  kekkai,
  komorebi,
  morningCall,
  nichidaiTacle,
  nidozuke,
  nikunotoriwake,
  niramitsukeru,
  nomikomu,
  norinoridance,
  oneplus,
  onsenryoko,
  paralysisForAll,
  pararaizu,
  poisonForAll,
  pop,
  presentbonus,
  provocationForAll,
  puruntshokushu,
  sleepForAll,
  soshaku,
  sudefureru,
  suitsgurai,
  sumibi,
  susumoSE,
  tsumayoji,
  uraken,
  yudou,
  zutsuki,
} from 'skillsFunction/enemySkillsFunction';
import {
  artificialFillet,
  deathDining,
  distributeEating,
  freezeChin,
  fruitsPhantom,
  gingerRain,
  hukuPickMountain,
  keemaGatling,
  leftoverForbid,
  meatballFall,
  noodleCluster,
  persaLoaf,
  sabaleSplash,
  sauceBigWave,
  shrimpSwing,
  silentForce,
  soupSpice,
  swepasWhip,
  tablewareHurtle,
  throatThirst,
  tripleDance,
  unsanitaryKitchen,
  vansPress,
  veryHotCurry,
  voidRice,
  weedGrudge,
} from 'skillsFunction/bossSkillsFunction';
import {
  airOnJs,
  assault,
  aunBless,
  beHard,
  beStrong,
  carSuspendBlade,
  causalCar,
  charge,
  conductorFinale,
  daikiLate,
  danceCar,
  diagonalSlash,
  dreamSlash,
  driveThrough,
  forestGrace,
  grailFantasia,
  highHeal,
  jsonWaltz,
  matchFelt,
  megaHeal,
  morningRamenBless,
  pandoraBox,
  picoHeal,
  protect,
  psychologyRhapsody,
  redDevilRequiem,
  sageSerenade,
  shaveSlash,
  spiritBless,
  tiledRondo,
  uooooo,
} from 'skillsFunction/partySkillsFunction';

export type SkillFunction = (
  scene: Scene,
  attacker: BattleActor,
  targets: BattleActor[],
) => void;

export const skills: Skill[] = [
  new Skill('裏拳', uraken, false, true),
  new Skill('博賭モビール', batmobiru, true, true), // 全体攻撃
  new Skill('ヒール', heal, false, false), // 単体回復
  new Skill('インサート', insert, false, false), // 単体回復
  new Skill('ポップ', pop, false, true), // 単体攻撃
  new Skill('ハニーハント', hanihant, true, true), //全体攻撃
  new Skill('☆Die魔法・バックフィスト☆', diemaho, false, true), // 単体攻撃
  new Skill('ノリノリダンス', norinoridance, true, false), // 全体回復
  new Skill('はさみこむ', hasamikom, false, true), // 単体攻撃
  new Skill('ファイヤーブレス', firebress, true, true), // 全体攻撃
  new Skill('プレゼントボーナス', presentbonus, true, false, true), // 全体蘇生回復
  new Skill('必死の抵抗', hishinoR, false, true), //単体攻撃
  new Skill('ブラックボックス', blackbox, true, true), // 全体攻撃
  new Skill('進もう、すべてを栄養にして', susumoSE, true, false), // 全体回復
  new Skill('アトラクションの整備不良', atrnoseibi, true, true), // 全体攻撃
  new Skill('飲み込む', nomikomu, false, true), //単体攻撃
  new Skill('決壊', kekkai, true, true), // 全体攻撃
  new Skill('氾濫', hanran, true, true), // 全体攻撃
  new Skill('爪楊枝', tsumayoji, false, true), //単体攻撃
  new Skill('素手で触れる', sudefureru, false, true), //単体攻撃
  new Skill('モーニングコール', morningCall, false, true), //単体攻撃
  new Skill('肉の取り分け', nikunotoriwake, false, false), // 単体回復
  new Skill('炭火', sumibi, false, true), //単体攻撃
  new Skill('頭突き', zutsuki, false, true), //単体攻撃
  new Skill('スイーツ喰らい', suitsgurai, true, false, true), // 全体蘇生回復
  new Skill('迫真の演技...御意ﾂ', hakusinGyoi, true, true), // 全体攻撃

  new Skill('日大災害誤射タックル', nichidaiTacle, true, true),
  new Skill('温泉旅行', onsenryoko, true, false), // 全体回復
  new Skill('伊勢回転性', isekaitense, true, false, true), // 復活(予定)
];

export const stateSkills: Skill[] = [
  new Skill('毒胞子', dokuhoushi, false, true), //単体攻撃（毒）
  new Skill('パラライズ', pararaizu, false, true), // 単体攻撃（マヒ）
  new Skill('木漏れ日', komorebi, false, true), // 単体攻撃（眠り）
  new Skill('羽交い締め', hagaizime, false, true), // 単体攻撃（関節痛）
  new Skill('ブレイクダンス', breakdance, true, false), // 単体攻撃（挑発）
  new Skill('咀嚼', soshaku, false, true), // 単体攻撃（毒）
  new Skill('同情を誘う', doujou, false, true), // 単体攻撃（毒）
  new Skill('過呼吸', kakokyu, false, true), // 単体攻撃（眠り）
  new Skill('ブレスケア', bresscare, false, false), // 単体攻撃（一定回復）
  new Skill('プルんと触手', puruntshokushu, false, true), // 単体攻撃（マヒ）
  new Skill('誘導', yudou, false, false), // 単体攻撃（挑発）
  new Skill('吐き出す', hakidas, false, true), // 単体攻撃（関節痛）
  new Skill('風化', fuuka, false, true), // 単体攻撃（関節痛）
  new Skill('時価駆っくん', jikakkakun, false, true), // 単体攻撃（関節痛）

  new Skill('どく', poisonForAll, false, true),
  new Skill('ブレスケア', healContinueForAll, false, false),
  new Skill('シャーシンプラグイン', paralysisForAll, false, true),
  new Skill('ハードぎ', sleepForAll, false, true),
  new Skill('ヒザカックン', arthralgiaForAll, false, true),
  new Skill('せたがやそだち', glucosamineForAll, false, false),
  new Skill('wmail from k-kenta', provocationForAll, false, false),
  new Skill('どく', poisonForAll, false, true),
  new Skill('どく', poisonForAll, false, true),
];

export const buffSkills: Skill[] = [
  new Skill('アタックドーピング', attackdoping, false, false), // 攻撃力（増）
  new Skill('かたくなる', katakunaru, true, false), // 防御力（増）
  new Skill('1個増量', oneplus, false, false), // 攻撃力（増）
  new Skill('弐怒漬け', nidozuke, false, false), // 攻撃力（増）
  new Skill('睨みつける', niramitsukeru, false, false), // 攻撃力（減）
];

export const ateSkills: Skill[] = [
  new Skill('スイパスウィップ', swepasWhip, false, true),
  new Skill('バンズプレス', vansPress, false, true),
  new Skill('パーサローフ', persaLoaf, false, false),
  new Skill('フルーツファントム', fruitsPhantom, false, true),
  new Skill('サバレースプラッシュ', sabaleSplash, true, true),
];

export const bteSkills: Skill[] = [
  new Skill('エビテンスイング', shrimpSwing, false, true),
  new Skill('三色の舞', tripleDance, true, true),
  new Skill('ジンジャーレイン', gingerRain, true, true),
  new Skill('スロートサースト', throatThirst, false, true),
  new Skill('ソースビッグウェーブ', sauceBigWave, true, true),
];

export const melcineSkills: Skill[] = [
  new Skill('ヌードルクラスタ', noodleCluster, false, true),
  new Skill('アーティフィカルチャーシュー', artificialFillet, false, true),
  new Skill('ダーシースパイス', soupSpice, true, true),
  new Skill('フリーズチャイン', freezeChin, false, true),
  new Skill('ウィードグルージ', weedGrudge, true, true),
];

export const elecaSkills: Skill[] = [
  new Skill('ボイドライス', voidRice, false, true),
  new Skill('ミートボールフォール', meatballFall, true, true),
  new Skill('ベリカラカリー', veryHotCurry, false, false),
  new Skill('フクピクマウンテン', hukuPickMountain, false, false),
  new Skill('キーマガトリング', keemaGatling, false, true),
];

export const obcSkills: Skill[] = [
  new Skill('レフトオーバーフォービット', leftoverForbid, false, true),
  new Skill('サイレントフォース', silentForce, false, true),
  new Skill('ディストリビュートイーティング', distributeEating, true, true),
  new Skill('テーブルウェアハートル', tablewareHurtle, true, true),
  new Skill('アンサニタリーキッチン', unsanitaryKitchen, true, true),
  new Skill('デス・ダイニング', deathDining, true, true),
];

export const marcSkills: Skill[] = [
  new Skill('車懸りの刃', carSuspendBlade, true, true),
  new Skill('斜め切り', diagonalSlash, true, true),
  new Skill('そぎ切り', shaveSlash, false, true), // そぎ切り（中攻撃）
  new Skill('夢翔斬', dreamSlash, false, true), // 夢翔斬（超強攻撃、自分に眠り）
  new Skill('因果の小車', causalCar, false, true), // 因果の小車（強攻撃、死か外れるまで攻撃し続ける）
  new Skill('舞車', danceCar, false, false),
  new Skill('ドライブスルー', driveThrough, false, true), // ドライブスルー（強攻撃、被害者にマヒ）
  new Skill('パンドラの箱', pandoraBox, true, true),
];

export const shidenSkills: Skill[] = [
  new Skill('js上の詠唱曲', airOnJs, false, true),
  new Skill('jsonの円舞曲', jsonWaltz, false, true),
  new Skill('tiledの回旋曲', tiledRondo, false, false),
  new Skill('心理の狂詩曲', psychologyRhapsody, false, true),
  new Skill('聖杯の幻想曲', grailFantasia, false, false),
  new Skill('指揮者の終曲', conductorFinale, false, true),
  new Skill('賢者の小夜曲', sageSerenade, false, true),
  new Skill('紅魔の鎮魂歌', redDevilRequiem, true, true),
];

export const poulerSkills: Skill[] = [
  new Skill('朝ラーの怒り', morningRamenBless, true, true),
  new Skill('阿吽の加護', aunBless, true, false),
  new Skill('精霊の加護', spiritBless, true, false),
  new Skill('杜の恵み', forestGrace, true, false, true),
  new Skill('ヒール', heal, false, false),
  new Skill('ピコヒール', picoHeal, false, false),
  new Skill('メガヒール', megaHeal, false, false),
  new Skill('ハイヒール', highHeal, false, true),
];

export const moughSkills: Skill[] = [
  new Skill('まもる', protect, true, false),
  new Skill('せめる', assault, false, true),
  new Skill('つよくなる', beStrong, false, true),
  new Skill('かたくなる', beHard, true, false),
  new Skill('たいきばんせい', daikiLate, true, false),
  new Skill('とつげき', charge, false, true),
  new Skill('きあい', matchFelt, true, false),
  new Skill('うおおおおお', uooooo, false, true),
];
