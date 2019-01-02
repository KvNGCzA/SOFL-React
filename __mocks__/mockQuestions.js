export default {
  status: 200,
  questions: [
    [
      {
        id: 6,
        title: 'Does Jelili have sense?',
        content: 'Please does Jelili have sense?',
        tags: 'cohort 41, andel, lagos',
        username: 'cza3010',
        userid: 1,
        likes: null,
        dislikes: ['cza3010', 'King3010'],
        answers_count: 0,
        created_at: '2018-10-09T15:23:17.437Z',
        modified_date: '2018-10-09T15:23:17.437Z',
        fts: "'jelili':2,7 'pleas':5 'sens':4,9"
      },
      {
        id: 5,
        title: "Zombie docker container that can't be killed",
        content: "I use docker-compose to create a bunch of containers and link them together. For some of the container definitions, I might have restart: always as the restart policy.\n\nNow I have a postgres container that respawns back to life if stopped. \n\nUsing docker-compose down in the dir that started the service doesn't work either.\n\nHow can I kill a container and keep it from coming back to life?",
        tags: 'docker, docker-compose',
        username: 'emekaNwa',
        userid: 3,
        likes: [
          'jalil'
        ],
        dislikes: [],
        answers_count: 1,
        created_at: '2018-10-02T02:23:52.557Z',
        modified_date: '2018-10-02T02:23:52.557Z',
        fts: "'alway':34 'back':47,79 'bunch':17 'come':78 'compos':13,55 'contain':3,19,28,44,73 'creat':15 'definit':29 'dir':59 'docker':2,12,54 'docker-compos':11,53 'doesn':64 'either':67 'keep':75 'kill':8,71 'life':49,81 'link':21 'might':31 'polici':38 'postgr':43 'respawn':46 'restart':33,37 'servic':63 'start':61 'stop':51 'togeth':23 'use':10,52 'work':66 'zombi':1"
      },
      {
        id: 4,
        title: 'how to draw excel style data bars in angular?',
        content: 'I want to add databars behind values in the selected column in my grid like the Data Bars Conditional Formatting option in Excel.\n\nThis answer show me the thing using jquery data table, Can anyone give me the idea for this in angular 6.\n\nNote: I am not using any 3rd party grid, I have created this grid from my own. ',
        tags: 'excel, angular, typescript, angular6',
        username: 'emekaNwa',
        userid: 3,
        likes: null,
        dislikes: [
          'King3010',
          'frances0406'
        ],
        answers_count: 1,
        created_at: '2018-10-02T02:22:28.940Z',
        modified_date: '2018-10-02T02:22:28.940Z',
        fts: "'3rd':60 '6':53 'add':13 'angular':9,52 'answer':34 'anyon':44 'bar':7,27 'behind':15 'column':20 'condit':28 'creat':65 'data':6,26,41 'databar':14 'draw':3 'excel':4,32 'format':29 'give':45 'grid':23,62,67 'idea':48 'jqueri':40 'like':24 'note':54 'option':30 'parti':61 'select':19 'show':35 'style':5 'tabl':42 'thing':38 'use':39,58 'valu':16 'want':11"
      },
      {
        id: 3,
        title: "pyspark's “between” function: range search on timestamps is not inclusive",
        content: "pyspark's 'between' function is not inclusive for timestamp input.\n\nFor example, if we want all rows between two dates, say, '2017-04-13' and '2017-04-14', then it performs an \"exclusive\" search when the dates are passed as strings. i.e., it omits the '2017-04-14 00:00:00' fields\n\nHowever, the document seem to hint that it is inclusive ( [http://spark.apache.org/docs/2.1.0/api/python/pyspark.sql.html ], no reference on timestamp though)\n\nOf course, one way is to add a microsecond from the upper bound and pass it to the function. However, not a great fix. Any clean way of doing inclusive search? ",
        tags: 'python, datetime, range, pyspark, between',
        username: 'frances0406',
        userid: 2,
        likes: [
          'King3010',
          'emekaNwa'
        ],
        dislikes: null,
        answers_count: 1,
        created_at: '2018-10-02T02:11:26.171Z',
        modified_date: '2018-10-02T02:11:26.171Z',
        fts: "'-04':34,38,58 '-13':35 '-14':39,59 '/docs/2.1.0/api/python/pyspark.sql.html':76 '00':60,61,62 '2017':33,37,57 'add':88 'bound':94 'clean':107 'cours':83 'date':31,48 'document':66 'exampl':23 'exclus':44 'field':63 'fix':105 'function':4,15,100 'great':104 'hint':69 'howev':64,101 'i.e':53 'inclus':11,18,73,111 'input':21 'microsecond':90 'omit':55 'one':84 'pass':50,96 'perform':42 'pyspark':1,12 'rang':5 'refer':78 'row':28 'say':32 'search':6,45,112 'seem':67 'spark.apache.org':75 'spark.apache.org/docs/2.1.0/api/python/pyspark.sql.html':74 'string':52 'though':81 'timestamp':8,20,80 'two':30 'upper':93 'want':26 'way':85,108"
      },
      {
        id: 2,
        title: 'firestore sync time between clients',
        content: "I have this document structure in firestore collection\n\n{ message: 'hello world', time: 1538398128 }\n\ntime value is set by client when it posts message with this function\n\nmoment().unix()\n\nThe problem is that my clients have different time and if I sort documents by time it is inconsistent, like this example\n\n{ message: 'aaa', time: 1538398317 } // client 1 post at 14.00:00\n{ message: 'bbb', time: 1538398257 } // client 2 post at 14:00:10\n\nand on client I see \"bbb\" before \"aaa\". How can I fix this problem? I know that exists firebase.firestore.FieldValue.serverTimestamp(), but it gives me the value only after I posted the document, i can't use this on client. Thanks\n",
        tags: 'javascript, reactjs, time, google-cloud-firestore, momentjs',
        username: 'King3010',
        userid: 1,
        likes: [
          'frances0406',
          'emekaNwa'
        ],
        dislikes: null,
        answers_count: 2,
        created_at: '2018-10-02T02:06:25.750Z',
        modified_date: '2018-10-02T02:06:25.750Z',
        fts: "'00':65,75 '1':61 '10':76 '14':74 '14.00':64 '1538398128':18 '1538398257':69 '1538398317':59 '2':71 'aaa':57,84 'bbb':67,82 'client':5,24,39,60,70,79,114 'collect':13 'differ':41 'document':9,47,107 'exampl':55 'exist':94 'firebase.firestore.fieldvalue.servertimestamp':95 'firestor':1,12 'fix':88 'function':31 'give':98 'hello':15 'inconsist':52 'know':92 'like':53 'messag':14,28,56,66 'moment':32 'post':27,62,72,105 'problem':35,90 'see':81 'set':22 'sort':46 'structur':10 'sync':2 'thank':115 'time':3,17,19,42,49,58,68 'unix':33 'use':111 'valu':20,101 'world':16"
      },
      {
        id: 1,
        title: 'how do I check a file is a valid xlsx file in java without opening with POI',
        content: "\n\nIn java (jdk 1.6) is there a way to check a file is a valid xlsx without opening the entire file with POI or other API. Currently we use Apache POI in the project to open the file - basically we create a new XSSFWorkbook(inputStream) and if that throws an exception it is not a valid xlsx. However we found one xlsx file which is 8MB is taking 1GB memory to open for some reason and actually caused a production outage on our servers. We can not rely on the file extension as someone can take a file which is not xlsx like a php file and rename with xlsx extension. I'm looking for some option which has minimal memory impacts - ideally not opening the file at all.\n\nIts too much of a risk if a single file upload can kill the server but we also still need to validate the file is in fact an xlsx.\n",
        tags: 'java, excel, apache-poi, file-type',
        username: 'King3010',
        userid: 1,
        likes: [
          'frances0406'
        ],
        dislikes: [
          'emekaNwa'
        ],
        answers_count: 9,
        created_at: '2018-10-02T02:04:32.240Z',
        modified_date: '2018-10-02T02:04:32.240Z',
        fts: "'1.6':21 '1gb':86 '8mb':83 'actual':94 'also':164 'apach':47 'api':43 'basic':56 'caus':95 'check':4,27 'creat':58 'current':44 'entir':37 'except':68 'extens':109,128 'fact':173 'file':6,11,29,38,55,80,108,115,123,144,156,170 'found':77 'howev':75 'ideal':140 'impact':139 'inputstream':62 'java':13,19 'jdk':20 'kill':159 'like':120 'look':131 'm':130 'memori':87,138 'minim':137 'much':149 'need':166 'new':60 'one':78 'open':15,35,53,89,142 'option':134 'outag':98 'php':122 'poi':17,40,48 'product':97 'project':51 'reason':92 'reli':105 'renam':125 'risk':152 'server':101,161 'singl':155 'someon':111 'still':165 'take':85,113 'throw':66 'upload':157 'use':46 'valid':9,32,73,168 'way':25 'without':14,34 'xlsx':10,33,74,79,119,127,175 'xssfworkbook':61"
      }
    ],
    [
      {
        id: 2,
        title: 'firestore sync time between clients',
        content: "I have this document structure in firestore collection\n\n{ message: 'hello world', time: 1538398128 }\n\ntime value is set by client when it posts message with this function\n\nmoment().unix()\n\nThe problem is that my clients have different time and if I sort documents by time it is inconsistent, like this example\n\n{ message: 'aaa', time: 1538398317 } // client 1 post at 14.00:00\n{ message: 'bbb', time: 1538398257 } // client 2 post at 14:00:10\n\nand on client I see \"bbb\" before \"aaa\". How can I fix this problem? I know that exists firebase.firestore.FieldValue.serverTimestamp(), but it gives me the value only after I posted the document, i can't use this on client. Thanks\n",
        tags: 'javascript, reactjs, time, google-cloud-firestore, momentjs',
        username: 'King3010',
        userid: 1,
        likes: [
          'frances0406',
          'emekaNwa'
        ],
        dislikes: null,
        answers_count: 2,
        created_at: '2018-10-02T02:06:25.750Z',
        modified_date: '2018-10-02T02:06:25.750Z',
        fts: "'00':65,75 '1':61 '10':76 '14':74 '14.00':64 '1538398128':18 '1538398257':69 '1538398317':59 '2':71 'aaa':57,84 'bbb':67,82 'client':5,24,39,60,70,79,114 'collect':13 'differ':41 'document':9,47,107 'exampl':55 'exist':94 'firebase.firestore.fieldvalue.servertimestamp':95 'firestor':1,12 'fix':88 'function':31 'give':98 'hello':15 'inconsist':52 'know':92 'like':53 'messag':14,28,56,66 'moment':32 'post':27,62,72,105 'problem':35,90 'see':81 'set':22 'sort':46 'structur':10 'sync':2 'thank':115 'time':3,17,19,42,49,58,68 'unix':33 'use':111 'valu':20,101 'world':16"
      },
      {
        id: 3,
        title: "pyspark's “between” function: range search on timestamps is not inclusive",
        content: "pyspark's 'between' function is not inclusive for timestamp input.\n\nFor example, if we want all rows between two dates, say, '2017-04-13' and '2017-04-14', then it performs an \"exclusive\" search when the dates are passed as strings. i.e., it omits the '2017-04-14 00:00:00' fields\n\nHowever, the document seem to hint that it is inclusive ( [http://spark.apache.org/docs/2.1.0/api/python/pyspark.sql.html ], no reference on timestamp though)\n\nOf course, one way is to add a microsecond from the upper bound and pass it to the function. However, not a great fix. Any clean way of doing inclusive search? ",
        tags: 'python, datetime, range, pyspark, between',
        username: 'frances0406',
        userid: 2,
        likes: [
          'King3010',
          'emekaNwa'
        ],
        dislikes: null,
        answers_count: 1,
        created_at: '2018-10-02T02:11:26.171Z',
        modified_date: '2018-10-02T02:11:26.171Z',
        fts: "'-04':34,38,58 '-13':35 '-14':39,59 '/docs/2.1.0/api/python/pyspark.sql.html':76 '00':60,61,62 '2017':33,37,57 'add':88 'bound':94 'clean':107 'cours':83 'date':31,48 'document':66 'exampl':23 'exclus':44 'field':63 'fix':105 'function':4,15,100 'great':104 'hint':69 'howev':64,101 'i.e':53 'inclus':11,18,73,111 'input':21 'microsecond':90 'omit':55 'one':84 'pass':50,96 'perform':42 'pyspark':1,12 'rang':5 'refer':78 'row':28 'say':32 'search':6,45,112 'seem':67 'spark.apache.org':75 'spark.apache.org/docs/2.1.0/api/python/pyspark.sql.html':74 'string':52 'though':81 'timestamp':8,20,80 'two':30 'upper':93 'want':26 'way':85,108"
      },
      {
        id: 1,
        title: 'how do I check a file is a valid xlsx file in java without opening with POI',
        content: "\n\nIn java (jdk 1.6) is there a way to check a file is a valid xlsx without opening the entire file with POI or other API. Currently we use Apache POI in the project to open the file - basically we create a new XSSFWorkbook(inputStream) and if that throws an exception it is not a valid xlsx. However we found one xlsx file which is 8MB is taking 1GB memory to open for some reason and actually caused a production outage on our servers. We can not rely on the file extension as someone can take a file which is not xlsx like a php file and rename with xlsx extension. I'm looking for some option which has minimal memory impacts - ideally not opening the file at all.\n\nIts too much of a risk if a single file upload can kill the server but we also still need to validate the file is in fact an xlsx.\n",
        tags: 'java, excel, apache-poi, file-type',
        username: 'King3010',
        userid: 1,
        likes: [
          'frances0406'
        ],
        dislikes: [
          'emekaNwa'
        ],
        answers_count: 9,
        created_at: '2018-10-02T02:04:32.240Z',
        modified_date: '2018-10-02T02:04:32.240Z',
        fts: "'1.6':21 '1gb':86 '8mb':83 'actual':94 'also':164 'apach':47 'api':43 'basic':56 'caus':95 'check':4,27 'creat':58 'current':44 'entir':37 'except':68 'extens':109,128 'fact':173 'file':6,11,29,38,55,80,108,115,123,144,156,170 'found':77 'howev':75 'ideal':140 'impact':139 'inputstream':62 'java':13,19 'jdk':20 'kill':159 'like':120 'look':131 'm':130 'memori':87,138 'minim':137 'much':149 'need':166 'new':60 'one':78 'open':15,35,53,89,142 'option':134 'outag':98 'php':122 'poi':17,40,48 'product':97 'project':51 'reason':92 'reli':105 'renam':125 'risk':152 'server':101,161 'singl':155 'someon':111 'still':165 'take':85,113 'throw':66 'upload':157 'use':46 'valid':9,32,73,168 'way':25 'without':14,34 'xlsx':10,33,74,79,119,127,175 'xssfworkbook':61"
      },
      {
        id: 5,
        title: "Zombie docker container that can't be killed",
        content: "I use docker-compose to create a bunch of containers and link them together. For some of the container definitions, I might have restart: always as the restart policy.\n\nNow I have a postgres container that respawns back to life if stopped. \n\nUsing docker-compose down in the dir that started the service doesn't work either.\n\nHow can I kill a container and keep it from coming back to life?",
        tags: 'docker, docker-compose',
        username: 'emekaNwa',
        userid: 3,
        likes: [
          'jalil'
        ],
        dislikes: [],
        answers_count: 1,
        created_at: '2018-10-02T02:23:52.557Z',
        modified_date: '2018-10-02T02:23:52.557Z',
        fts: "'alway':34 'back':47,79 'bunch':17 'come':78 'compos':13,55 'contain':3,19,28,44,73 'creat':15 'definit':29 'dir':59 'docker':2,12,54 'docker-compos':11,53 'doesn':64 'either':67 'keep':75 'kill':8,71 'life':49,81 'link':21 'might':31 'polici':38 'postgr':43 'respawn':46 'restart':33,37 'servic':63 'start':61 'stop':51 'togeth':23 'use':10,52 'work':66 'zombi':1"
      },
      {
        id: 4,
        title: 'how to draw excel style data bars in angular?',
        content: 'I want to add databars behind values in the selected column in my grid like the Data Bars Conditional Formatting option in Excel.\n\nThis answer show me the thing using jquery data table, Can anyone give me the idea for this in angular 6.\n\nNote: I am not using any 3rd party grid, I have created this grid from my own. ',
        tags: 'excel, angular, typescript, angular6',
        username: 'emekaNwa',
        userid: 3,
        likes: null,
        dislikes: [
          'King3010',
          'frances0406'
        ],
        answers_count: 1,
        created_at: '2018-10-02T02:22:28.940Z',
        modified_date: '2018-10-02T02:22:28.940Z',
        fts: "'3rd':60 '6':53 'add':13 'angular':9,52 'answer':34 'anyon':44 'bar':7,27 'behind':15 'column':20 'condit':28 'creat':65 'data':6,26,41 'databar':14 'draw':3 'excel':4,32 'format':29 'give':45 'grid':23,62,67 'idea':48 'jqueri':40 'like':24 'note':54 'option':30 'parti':61 'select':19 'show':35 'style':5 'tabl':42 'thing':38 'use':39,58 'valu':16 'want':11"
      }
    ]
  ]
};
