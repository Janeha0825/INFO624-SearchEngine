package info624.Service;

import org.springframework.stereotype.Service;

import javax.net.ssl.HttpsURLConnection;
import java.io.*;
import java.net.URL;
import java.net.URLEncoder;
import java.util.Scanner;

@Service
public class BingService {
    // Enter a valid subscription key.
    static String subscriptionKey = "d006441623e84b52b6508c6f6ee50af4";

    /**
     * CITATION:
     * We used Bing's api so we used their documentation to create our service layer:
     *      https://docs.microsoft.com/en-us/azure/cognitive-services/bing-web-search/
     * Some of their documentation code snippet is old and had some extra stuff in it which we did not need as spring took care of some of those things for us. So we scrapped all those thing.
     */

    /*
     * If you encounter unexpected authorization errors, double-check these values
     * against the endpoint for your Bing Web search instance in your Azure
     * dashboard.
     */
    static String host = "https://api.bing.microsoft.com";
    static String searchPath = "/v7.0/search";
    static String suggestPath = "/v7.0/Suggestions";
    static String spellCheckPath = "/v7.0/spellcheck";
    public static String search (String searchQuery) throws Exception {
        URL url = new URL(host + searchPath + "?q=" +  URLEncoder.encode(searchQuery, "UTF-8"));
        HttpsURLConnection connection = (HttpsURLConnection)url.openConnection();
        connection.setRequestProperty("Ocp-Apim-Subscription-Key", subscriptionKey);
        InputStream stream = connection.getInputStream();
        String response = new Scanner(stream).useDelimiter("\\A").next();
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
        InputStream stream = connection.getInputStream();
        String response = new Scanner(stream).useDelimiter("\\A").next();
        stream.close();
        return response;
    }

    public String spellcheck(String spellCheckQuery) throws Exception{
        String params = "?mkt=en-US&mode=proof";
        URL url = new URL (host + spellCheckPath + params);
        HttpsURLConnection connection = (HttpsURLConnection) url.openConnection();
        connection.setRequestMethod("POST");
        connection.setRequestProperty("Content-Type", "application/x-www-form-urlencoded");
        connection.setRequestProperty("Ocp-Apim-Subscription-Key", subscriptionKey);
        connection.setDoOutput(true);
        DataOutputStream wr = new DataOutputStream(connection.getOutputStream());
        wr.writeBytes("text=" + spellCheckQuery);
        wr.flush();
        wr.close();
        BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
        String line;
        String response = "";
        while ((line = in.readLine()) != null) {
            response+=line;
        }
        in.close();
        return response;
    }
}
