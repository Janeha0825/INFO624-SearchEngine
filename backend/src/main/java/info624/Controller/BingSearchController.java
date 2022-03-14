package info624.Controller;

import info624.Service.BingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import static org.springframework.http.ResponseEntity.ok;

@RestController
@RequestMapping()
public class BingSearchController {

    @Autowired
    BingService bingService;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE, path = "/search")
    public ResponseEntity<String> search(@RequestParam("q") String query) throws Exception {
        return ok(bingService.search(query));
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE, path = "/suggest")
    public ResponseEntity<String> suggest(@RequestParam("q") String query) throws Exception {
        return ok(bingService.suggest(query));
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE, path = "/spellcheck")
    public ResponseEntity<String> spellCheck(@RequestParam("q") String query) throws Exception {
        return ok(bingService.spellcheck(query));
    }
}
