package info624.Service;

import org.springframework.stereotype.Service;

import javax.net.ssl.HttpsURLConnection;
import java.io.InputStream;
import java.io.UnsupportedEncodingException;
import java.net.ProtocolException;
import java.net.URL;
import java.net.URLEncoder;
import java.util.Scanner;

@Service
public class BingService {
    // Enter a valid subscription key.
    static String subscriptionKey = "d006441623e84b52b6508c6f6ee50af4";

    /*
     * If you encounter unexpected authorization errors, double-check these values
     * against the endpoint for your Bing Web search instance in your Azure
     * dashboard.
     */
    static String host = "https://api.bing.microsoft.com";
    static String searchPath = "/v7.0/search";
    static String suggestPath = "/v7.0/Suggestions";
    public static String search (String searchQuery) throws Exception {
        // Construct the URL.
        URL url = new URL(host + searchPath + "?q=" +  URLEncoder.encode(searchQuery, "UTF-8"));

        // Open the connection.
        HttpsURLConnection connection = (HttpsURLConnection)url.openConnection();
        connection.setRequestProperty("Ocp-Apim-Subscription-Key", subscriptionKey);

        // Receive the JSON response body.
        InputStream stream = connection.getInputStream();
        String response = new Scanner(stream).useDelimiter("\\A").next();
//
        // Construct the result object.
//        SearchResults results = new SearchResults(new HashMap<String, String>(), response);

        // Extract Bing-related HTTP headers.
//        Map<String, List<String>> headers = connection.getHeaderFields();
//        for (String header : headers.keySet()) {
//            if (header == null) continue;      // may have null key
//            if (header.startsWith("BingAPIs-") || header.startsWith("X-MSEdge-")){
//                results.relevantHeaders.put(header, headers.get(header).get(0));
//            }
//        }
        stream.close();
        return response;
    }

    public String suggest(String suggestQuery) throws Exception {
        String encoded_query = URLEncoder.encode (suggestQuery, "UTF-8");
        String params = "?mkt=en-US" + "&q=" + encoded_query;
        URL url = new URL (host + suggestPath + params);
        HttpsURLConnection connection = (HttpsURLConnection) url.openConnection();
        connection.setRequestMethod("GET");
        connection.setRequestProperty("Ocp-Apim-Subscription-Key", subscriptionKey);
        connection.setDoOutput(true);

        // Receive the JSON response body.
        InputStream stream = connection.getInputStream();
        String response = new Scanner(stream).useDelimiter("\\A").next();
        stream.close();
        return response;
    }
}
