// Set a global variable for the location of
// the node_modules folder
modulePath = '../server/node_modules/';

// Core
IgeBase = require('../engine/core/IgeBase');
IgeClass = require('../engine/core/IgeClass');
IgeEventingClass = require('../engine/core/IgeEventingClass');
IgePoint = require('../engine/core/IgePoint');
IgePoly2d = require('../engine/core/IgePoly2d');
IgeMatrix2d = require('../engine/core/IgeMatrix2d');
IgeMatrixStack = require('../engine/core/IgeMatrixStack');
// Components
IgeAnimationComponent = require('../engine/components/IgeAnimationComponent');
IgeVelocityComponent = require('../engine/components/IgeVelocityComponent');
IgeTweenComponent = require('../engine/components/IgeTweenComponent');
IgeInputComponent = require('../engine/components/IgeInputComponent');
// Extensions
IgeTransformExtension = require('../engine/extensions/IgeTransformExtension');
IgeUiPositionExtension = require('../engine/extensions/IgeUiPositionExtension');
IgeUiStyleExtension = require('../engine/extensions/IgeUiStyleExtension');
IgeUiInteractionExtension = require('../engine/extensions/IgeUiInteractionExtension');
// Classes
IgeTween = require('../engine/core/IgeTween');
IgeTexture = require('../engine/core/IgeTexture');
IgeCellSheet = require('../engine/core/IgeCellSheet');
IgeSpriteSheet = require('../engine/core/IgeSpriteSheet');
IgeFontSheet = require('../engine/core/IgeFontSheet');
IgeObject = require('../engine/core/IgeObject');
IgeEntity = require('../engine/core/IgeEntity');
IgeInteractiveEntity = require('../engine/core/IgeInteractiveEntity');
IgeUiEntity = require('../engine/core/IgeUiEntity');
IgeFontEntity = require('../engine/core/IgeFontEntity');
IgeParticleEmitter = require('../engine/core/IgeParticleEmitter');
IgeMap2d = require('../engine/core/IgeMap2d');
IgeTileMap2d = require('../engine/core/IgeTileMap2d');
IgeCamera = require('../engine/core/IgeCamera');
IgeViewport = require('../engine/core/IgeViewport');
IgeScene2d = require('../engine/core/IgeScene2d');
IgeSceneUi = require('../engine/core/IgeSceneUi');
IgeSceneIso = require('../engine/core/IgeSceneIso');
IgeEngine = require('../engine/core/IgeEngine');
// Network
IgeDummyContext = require('../engine/components/network/IgeDummyContext');
	// Socket.io
	IgeSocketIoServer = require('../engine/components/network/socket.io/IgeSocketIoServer');
	IgeSocketIoComponent = require('../engine/components/network/socket.io/IgeSocketIoComponent');
	// Net.io
	IgeNetIoServer = require('../engine/components/network/net.io/IgeNetIoServer');
	IgeNetIoComponent = require('../engine/components/network/net.io/IgeNetIoComponent');
// Chat
IgeChatServer = require('../engine/components/chat/IgeChatServer');
IgeChatComponent = require('../engine/components/chat/IgeChatComponent');
// Database
IgeMongoDb = require('../engine/components/database/mongodb/IgeMongoDb');
IgeMongoDbComponent = require('../engine/components/database/mongodb/IgeMongoDbComponent');

// Include the control class
IgeNode = require('./IgeNode');

// Start the app
var igeNode = new IgeNode();