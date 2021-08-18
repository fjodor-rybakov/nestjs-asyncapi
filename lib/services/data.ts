export const contractData = {
  asyncapi: '2.1.0',
  info: {
    title: 'Board Service [socket.io v4; namespace: /board-ws]',
    version: '1.0.0',
    description: 'This service is in charge of broadcasting realtime updates to board users',
  },
  channels: {
    board: {
      subscribe: {
        message: {
          $ref: '#/components/messages/BoardDto',
        },
      },
    },
    figuresCU: {
      subscribe: {
        message: {
          $ref: '#/components/messages/FigureDto',
        },
      },
    },
    figuresD: {
      subscribe: {
        message: {
          $ref: '#/components/messages/FigureDto',
        },
      },
    },
    canvas: {
      subscribe: {
        message: {
          $ref: '#/components/messages/UserDto',
        },
      },
    },
    error: {
      subscribe: {
        message: {
          $ref: '#/components/messages/ErrorDto',
        },
      },
    },
  },
  components: {
    messages: {
      ErrorDto: {
        payload: {
          type: 'object',
          properties: {
            info: {
              type: 'string',
              description: 'error message',
            },
            code: {
              type: 'number',
              description: 'error code',
            },
          },
        },
      },
      BoardDto: {
        payload: {
          type: 'object',
          properties: {
            uuid: {
              type: 'string',
              example: 'b6b7d521-805e-458a-8595-4a671373bdb6',
            },
            createdAt: {
              format: 'date-time',
              type: 'string',
              example: '2021-01-01T00:00:00Z',
            },
            updatedAt: {
              format: 'date-time',
              type: 'string',
              example: '2021-01-01T00:00:00Z',
            },
            name: {
              type: 'string',
              example: 'Board 0',
            },
            facilitatorUUID: {
              type: 'string',
              example: 'b6b7d521-805e-458a-8595-4a671373bdb6',
            },
          },
          required: ['uuid', 'createdAt', 'updatedAt', 'name'],
        },
      },
      UserDto: {
        payload: {
          type: 'object',
          properties: {
            uuid: {
              type: 'string',
              example: 'b6b7d521-805e-458a-8595-4a671373bdb6',
            },
            createdAt: {
              format: 'date-time',
              type: 'string',
              example: '2021-01-01T00:00:00Z',
            },
            updatedAt: {
              format: 'date-time',
              type: 'string',
              example: '2021-01-01T00:00:00Z',
            },
            name: {
              type: 'string',
              example: 'Jack',
            },
            role: {
              enum: ['admin', 'facilitator', 'user'],
              type: 'string',
            },
            boardUUID: {
              type: 'string',
            },
            currentCanvas: {
              type: 'number',
            },
          },
          required: ['uuid', 'createdAt', 'updatedAt', 'name', 'role', 'boardUUID', 'currentCanvas'],
        },
      },
      FigureDto: {
        payload: {
          type: 'object',
          properties: {
            uuid: {
              type: 'string',
              example: 'b6b7d521-805e-458a-8595-4a671373bdb6',
            },
            createdAt: {
              format: 'date-time',
              type: 'string',
              example: '2021-01-01T00:00:00Z',
            },
            updatedAt: {
              format: 'date-time',
              type: 'string',
              example: '2021-01-01T00:00:00Z',
            },
            canvas: {
              type: 'number',
              description: 'canvas index (0, 1, ...). 0 = current state, 1 = future state 1, ...',
            },
            boardUUID: {
              type: 'string',
              example: 'b6b7d521-805e-458a-8595-4a671373bdb6',
            },
            creatorUUID: {
              type: 'string',
              example: 'b6b7d521-805e-458a-8595-4a671373bdb6',
            },
            type: {
              type: 'string',
            },
            depth: {
              type: 'number',
            },
            data: {
              type: 'object',
            },
            transform: {
              type: 'object',
            },
          },
          required: ['uuid', 'createdAt', 'updatedAt', 'canvas', 'boardUUID', 'creatorUUID', 'type', 'depth', 'data', 'transform'],
        },
      },
    },
  },
};
