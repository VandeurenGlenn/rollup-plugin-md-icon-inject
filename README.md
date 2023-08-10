<div align="center">
<img src="https://raw.githubusercontent.com/VandeurenGlenn/rollup-plugin-md-icon-inline/main/logo.png" width="300">
</div>

#### Rollup plugin that inlines `<md-icon>` at build time.

So your final application doesn't have to rely on the material symbols font resource at runtime. There are many advantages:

- No FOUC (because the icons are directly available from your code.)
- No extra http requests.
- Works offline in a PWA.

```javascript
import {mdIconInline} from 'rollup-plugin-md-icon-inline';

// in your rollup config object
plugins: [mdIconInline()];
```

### Options

You can also specify options to get rid of the defaults :

```javascript
import {mdIconInline} from 'rollup-plugin-md-icon-inline';

mdIconInline({});
```
